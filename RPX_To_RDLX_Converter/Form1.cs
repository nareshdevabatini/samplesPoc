using System;
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
        private static string FormatXml(string inputXml)
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
        private class Utf8StringWriter : StringWriter
        {
            public Utf8StringWriter(StringBuilder sb) : base(sb)
            {
            }
            public override Encoding Encoding { get { return Encoding.UTF8; } }
        }
        private void button1_Click(object sender, EventArgs e)
        {
            var ertFileName = string.Empty;
            var ertFileContent = string.Empty;
            var connectionStringRDLX = "password=" + txtPassword.Text + ";" + "data source=" + txtServerName.Text + ";" + "initial catalog=" + txtDBName.Text + ";" + "user id=" + txtUserName.Text + ";";
            var sqlQuery = txtSQLQuery.Text;
            try
            {

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
                                    if (cNode.Name == "Value" && node["Value"].InnerText.Contains("Field3"))
                                    {
                                        cNode.InnerText = "=Globals!PageNumber";
                                    }
                                    if (node["Value"].InnerText.Contains("date()"))
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
                                    if (node["Value"].InnerText.Contains("time()"))
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
                                }
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
