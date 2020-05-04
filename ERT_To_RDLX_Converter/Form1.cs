using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Windows.Forms;
using System.Xml;

namespace RPX_To_RDLX_Converter
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private List<string> rpxDataFields = new List<string>();

        public static string DecodeFrom64(string encodedData)
        {
            byte[] encodedDataAsBytes = Convert.FromBase64String(encodedData);
            return ASCIIEncoding.ASCII.GetString(encodedDataAsBytes);
        }
        public static string FormatXml(string inputXml)
        {
            XmlDocument document = new XmlDocument();
            document.LoadXml(inputXml);

            StringBuilder builder = new StringBuilder();
            using (XmlTextWriter writer = new XmlTextWriter(new Utf8StringWriter(builder)))
            {
                writer.Formatting = Formatting.Indented;
                document.Save(writer);
            }

            return builder.ToString();
        }
        public class Utf8StringWriter : StringWriter
        {
            public Utf8StringWriter(StringBuilder sb) : base(sb)
            {
            }
            public override Encoding Encoding { get { return Encoding.UTF8; } }
        }

        private void btnConvertor_Click(object sender, EventArgs e)
        {
            var ertFileName = string.Empty;
            var ertFileContent = string.Empty;
            var connectionStringRDLX = "password=" + txtPassword.Text + ";" + "data source=" + txtServerName.Text + ";" + "initial catalog=" + txtDBName.Text + ";" + "user id=" + txtUserName.Text + ";";
            //var connectionStringRPX = "Provider=SQLOLEDB.1;Persist Security Info=False;User ID=greenwayprimeuser;Initial Catalog=PrimeRecord300011;Data Source=10.33.33.69";
            var sqlQuery = txtSQLQuery.Text;
            try
            {
                using (OpenFileDialog openFileDialog = new OpenFileDialog())
                {
                    openFileDialog.Filter = "(*.ert)|*.ert";
                    openFileDialog.FilterIndex = 2;
                    openFileDialog.RestoreDirectory = true;
                    openFileDialog.Title = "Please select .ERT file....";

                    if (openFileDialog.ShowDialog() == DialogResult.OK)
                    {
                        //Get the path of specified file
                        var ertFilePath = openFileDialog.FileName;
                        ertFileName = openFileDialog.SafeFileName;

                        //Read the contents of the file into a stream
                        var fileStream = openFileDialog.OpenFile();

                        using (StreamReader reader = new StreamReader(fileStream))
                        {
                            XmlDocument doc = new XmlDocument();
                            doc.LoadXml(reader.ReadToEnd().ToString());
                            XmlElement root = doc.DocumentElement;



                            XmlNodeList nodes = root.GetElementsByTagName("rptfile");
                            for (int i = 0; i < nodes.Count; i++)
                            {
                                ertFileContent = nodes[i].InnerXml;
                            }
                            reader.Close();
                        }

                    }
                }
                var result = DecodeFrom64(ertFileContent.ToString());

                XmlDocument documents = new XmlDocument();
                documents.LoadXml(result.ToString());
                XmlElement nodeList = documents.DocumentElement;

                // Remove the genre attribute.
                //nodeList.RemoveAttribute("GUIDLIB");
                //nodeList.RemoveAttribute("GUIDREP");
                //nodeList.RemoveAttribute("LICENSE");

                XmlNodeList Watermark = documents.SelectNodes("//Watermark");
                foreach (XmlNode node in Watermark)
                {
                    node.ParentNode.RemoveChild(node);
                }
                XmlNodeList Script = documents.SelectNodes("//Script");
                foreach (XmlNode node in Script)
                {
                    node.ParentNode.RemoveChild(node);
                }
                XmlNodeList pagesettings = documents.GetElementsByTagName("PageSettings");
                foreach (XmlNode anode in pagesettings)
                {
                    anode.RemoveAll();
                }

                XmlNode tray = documents.CreateNode(XmlNodeType.Element, "ReportComponentTray", null);
                nodeList.AppendChild(tray);

                XmlNode Parameters = documents.CreateNode(XmlNodeType.Element, "Parameters", null);
                nodeList.AppendChild(Parameters);

                XmlNode DataSources = documents.CreateNode(XmlNodeType.Element, "DataSources", null); //ConnectionString
                nodeList.AppendChild(DataSources);
                XmlNodeList dataFields = documents.GetElementsByTagName("Control");
                foreach (XmlNode dataField in dataFields)
                {
                    if (dataField.Attributes["Name"].Value.Contains("Field") && !string.IsNullOrEmpty(dataField.Attributes["DataField"].Value))
                    {
                        rpxDataFields.Add(dataField.Attributes["DataField"].Value);
                    }
                }
                using (FolderBrowserDialog fbd = new FolderBrowserDialog())
                {
                    fbd.Description = "Select folder to save .RPX file...";

                    if (fbd.ShowDialog() == DialogResult.OK)
                    {
                        //Get the path of specified file
                        var rpxFilePath = fbd.SelectedPath;
                        ertFileName = ertFileName.Replace(".ert", ".rpx");
                        rpxFilePath = rpxFilePath + '\\' + ertFileName;

                        //Read the contents of the file into a stream
                        documents.InnerXml = documents.InnerXml.Replace("=date()", "").Replace("=time()", "");
                        StreamWriter file = new StreamWriter(rpxFilePath);
                        file.WriteLine(FormatXml(documents.InnerXml));
                        //close the file
                        file.Close();
                    }
                }
                MessageBox.Show("Successfully Converted ERT to RPX file", "ERT TO RPX", MessageBoxButtons.OK);

                var process = Process.Start(@"C:\Program Files (x86)\GrapeCity\ActiveReports 14\Tools\GrapeCity.ActiveReports.Imports.Win.exe");
                process.WaitForExit();

                using (OpenFileDialog openFileDialog = new OpenFileDialog())
                {
                    openFileDialog.Filter = "(*.rdlx)|*.rdlx";
                    openFileDialog.FilterIndex = 2;
                    openFileDialog.RestoreDirectory = true;
                    openFileDialog.Title = "Please select .RDLX file....";

                    if (openFileDialog.ShowDialog() == DialogResult.OK)
                    {

                        //Read the contents of the file into a stream
                        var rdlxFileStream = openFileDialog.OpenFile();

                        //ertFileName = openFileDialog.FileName;
                        using (StreamReader reader = new StreamReader(rdlxFileStream))
                        {
                            XmlDocument doc = new XmlDocument();
                            doc.LoadXml(reader.ReadToEnd().ToString());
                            XmlNodeList pageWidth = doc.GetElementsByTagName("PageWidth");
                            foreach (XmlNode anode in pageWidth)
                            {
                                anode.InnerText = "9.5in";
                            }
                            XmlNodeList connectionStringNode = doc.GetElementsByTagName("ConnectString");  //Fields.Item("Patient:FirstName").Value
                            connectionStringNode[0].InnerText = connectionStringRDLX;
                            XmlNodeList dataProviderNode = doc.GetElementsByTagName("DataProvider");
                            dataProviderNode[0].InnerText = "SQL";
                            XmlNodeList commandTextNode = doc.GetElementsByTagName("CommandText");
                            commandTextNode[0].InnerText = sqlQuery;
                            XmlNodeList nodes = doc.GetElementsByTagName("Textbox");
                            foreach (XmlNode node in nodes)
                            {
                                foreach (XmlNode cNode in node.ChildNodes)
                                {
                                    if (node.Attributes["Name"].Value == "fldPageNumber" && cNode.Name == "Value")
                                    {
                                        cNode.InnerText = "=Globals!PageNumber";
                                    }

                                    if (node.Attributes["Name"].Value == "fldDate")
                                    {
                                        if (cNode.Name == "Value")
                                        {
                                            cNode.InnerText = "=Globals!ExecutionTime";
                                        }
                                        if (cNode.Name == "Style")
                                        {
                                            XmlNode formatElement = doc.CreateElement("Format");
                                            formatElement.InnerText = "MM/dd/yyyy";
                                            cNode.AppendChild(formatElement);
                                        }
                                    }
                                    if (node.Attributes["Name"].Value == "fldTime")
                                    {
                                        if (cNode.Name == "Value")
                                        {
                                            cNode.InnerText = "=Globals!ExecutionTime";
                                        }
                                        if (cNode.Name == "Style")
                                        {
                                            XmlNode formatElement = doc.CreateElement("Format");
                                            formatElement.InnerText = "h:mm tt";
                                            cNode.AppendChild(formatElement);
                                        }
                                    }
                                    if (cNode.InnerText != null && cNode.InnerText.Contains("=") && !cNode.InnerText.Contains("=Fields.Item") && node.Attributes["Name"].Value.Contains("Field"))
                                    {
                                        cNode.InnerText = "=Fields.Item(\"" + cNode.InnerText.Replace("=", "") + "\").Value";
                                    }
                                }
                            }
                            XmlNodeList RDLXFields = doc.GetElementsByTagName("Field");
                            foreach (XmlNode field in RDLXFields)
                            {
                                field.Attributes["Name"].Value = rpxDataFields.Find(x => x.Replace(" ", "") == field.InnerText);
                            }
                            XmlNodeList RDLXDataFields = doc.GetElementsByTagName("DataField");
                            foreach (XmlNode field in RDLXDataFields)
                            {
                                field.InnerText = rpxDataFields.Find(x => x.Replace(" ", "") == field.InnerText);
                            }

                            rdlxFileStream.Close();
                            doc.Save(openFileDialog.FileName);
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception: " + ex.Message);
            }
            finally
            {
                Console.WriteLine("Executing finally block.");
            }
        }
    }
}
