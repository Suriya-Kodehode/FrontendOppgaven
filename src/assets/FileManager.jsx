import { base_url as base } from "../../config";

const filePaths = {
    background: "/images/background",
    icons: "/images/icons",
    logo: "/images/logo",
};

export const getFilePath = (folderKey, fileName) => {
    const folderPath = filePaths[folderKey];
    if (!folderPath) {
        console.error(`Invalid folder key: ${folderKey}`);
        return "";
    }
    return `${base}${folderPath}/${encodeURIComponent(fileName)}`;
};

export const getFilePaths = (folderKey, fileNames) => fileNames.map(fileName => getFilePath(folderKey, fileName));