import { base_url as base } from "../../config";

const filePaths = {
    background: "/images/background",
    icons: "/images/icons",
    logo: "/images/logo",
};

const FileManager = (folderKey, fileName) => {
    const folderPath = filePaths[folderKey];
    if (!folderPath) {
        console.error(`Invalid folder key: ${folderKey}`);
        return "";
    }
    const encodedFileName = encodeURIComponent(fileName);
    return `${base}${folderPath}/${encodedFileName}`;
}

export const getFilePath = (folderKey, fileName) => {
    return FileManager(folderKey, fileName);
};

