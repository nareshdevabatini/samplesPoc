export class Saveimage {
    public download(imageData: any, fileName: string) {
        const blobData = this.convertBase64ToBlobData(imageData);

        const filename = fileName;
        if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
            window.navigator.msSaveOrOpenBlob(blobData, fileName);
        } else { // chrome
            const blob = new Blob([blobData], { type: 'image/png' });
            const url = window.URL.createObjectURL(blob);
            // window.open(url);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            link.click();
        }
    }
    public convertBase64ToBlobData(base64Data: string, contentType: string = 'image/png', sliceSize = 512) {
        const byteCharacters = atob(base64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
}