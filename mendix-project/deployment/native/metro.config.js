
const configUtils = require("/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-native/metro-config/dist");
const { resolve: metroResolve } = require("/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/metro-resolver");
const fs = require("fs");
const path = require("path");

const projectRoot = fs.realpathSync.native(__dirname);
const modelerNodeRoot = fs.realpathSync.native("/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node");
const modelerNodeModules = "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules";
const mendixRuntimeRoot = path.join(modelerNodeModules, "mendix");
const mxApiRoot = path.join(mendixRuntimeRoot, "mx-api");

function resolveMendixModule(moduleName) {
    if (moduleName === "mendix") {
        return mendixRuntimeRoot;
    }

    if (moduleName.startsWith("mendix/")) {
        return path.join(mendixRuntimeRoot, moduleName.slice("mendix/".length));
    }

    if (moduleName === "mx-api") {
        return mxApiRoot;
    }

    if (moduleName.startsWith("mx-api/")) {
        return path.join(mxApiRoot, moduleName.slice("mx-api/".length));
    }

    return null;
}

function asExistingFile(filePath) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        return fs.realpathSync.native(filePath);
    }

    return null;
}

function resolveMendixFile(moduleName, platform) {
    const modulePath = resolveMendixModule(moduleName);

    if (!modulePath) {
        return null;
    }

    const candidateFiles = [];

    if (platform) {
        candidateFiles.push(modulePath + "." + platform + ".js");
        candidateFiles.push(path.join(modulePath, "index." + platform + ".js"));
    }

    candidateFiles.push(
        modulePath + ".native.js",
        modulePath + ".js",
        path.join(modulePath, "index.native.js"),
        path.join(modulePath, "index.js")
    );

    for (const candidateFile of candidateFiles) {
        const resolvedFile = asExistingFile(candidateFile);

        if (resolvedFile) {
            return resolvedFile;
        }
    }

    return null;
}

const metroConfig = {
    projectRoot,
    watchFolders: [
        fs.realpathSync.native("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/theme"),
        fs.realpathSync.native("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource"),
        fs.realpathSync.native("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/themesource"),
        fs.realpathSync.native("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/.mendix-cache/modules"),
        modelerNodeRoot,
    ],
    resolver: {
        useWatchman: false,
        platforms: ["ios", "android"],
        sourceExts: ["native.js", "js", "jsx", "ts", "tsx", "cjs", "mjs", "json", "js_commonjs-exports", "js_commonjs-module"],
        resolveRequest(context, moduleName, platform) {
            const redirectedFile = resolveMendixFile(moduleName, platform);

            if (redirectedFile) {
                return {
                    type: "sourceFile",
                    filePath: redirectedFile,
                };
            }

            const redirectedModule = resolveMendixModule(moduleName);

            return metroResolve(context, redirectedModule ?? moduleName, platform);
        },
        extraNodeModules: {
            "@babel/runtime": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@babel/runtime",
            "big.js": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/big.js",
            "react": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react",
            "react-dom": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-dom",
            "react-native-gesture-handler": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native-gesture-handler",
            "react-native": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native",
            "hermes-compiler": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/hermes-compiler",
            "@react-native-community/cli": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-native-community/cli",
            "@react-native-community/cli-platform-android": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-native-community/cli-platform-android",
            "@react-native-community/cli-platform-ios": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-native-community/cli-platform-ios",
            "react-native-device-info": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native-device-info",
            "react-native-material-menu": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native-material-menu",
            "@react-navigation/bottom-tabs": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-navigation/bottom-tabs",
            "@react-navigation/core": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-navigation/core",
            "@react-navigation/drawer": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-navigation/drawer",
            "@react-navigation/native": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-navigation/native",
            "@react-navigation/stack": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-navigation/stack",
            "@react-navigation/native-stack": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-navigation/native-stack",
            "react-native-svg": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native-svg",
            "react-native-tab-view": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native-tab-view",
            "@react-native-vector-icons/common": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-native-vector-icons/common",
            "@d11/react-native-fast-image": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@d11/react-native-fast-image",
            "@shopify/flash-list": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@shopify/flash-list",
            "react-native-screens": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native-screens",
            "react-native-localize": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native-localize",
            "react-native-reanimated": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native-reanimated",
            "react-native-worklets": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native-worklets",
            "react-native-safe-area-context": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native-safe-area-context",
            "react-native-blob-util": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/react-native-blob-util",
            "@react-native-async-storage/async-storage": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-native-async-storage/async-storage",
            "@react-native-community/datetimepicker": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-native-community/datetimepicker",
            "eventemitter3": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/eventemitter3",
            "@react-native-picker/picker": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-native-picker/picker",
            "deprecated-react-native-prop-types": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/deprecated-react-native-prop-types",
            "@react-native/metro-config": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@react-native/metro-config",
            "@rollup/plugin-alias": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/@rollup/plugin-alias",
            "mendix": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/mendix",
            "mx-global": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/mx-global",
            "mx-api": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/mendix/mx-api",
            "mx-api/data": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/mendix/mx-api/data",
            "mx-api/parser": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/mendix/mx-api/parser",
            "mx-api/session": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/mendix/mx-api/session",
            "mx-api/ui": "/Users/wim.jongeneel/appdev/modeler/Mendix.StudioPro.MacOS/bin/modeler/tools/node/node_modules/mendix/mx-api/ui"
        }
    },
    cacheVersion: "",
};

module.exports = configUtils.mergeConfig(configUtils.getDefaultConfig(__dirname), metroConfig);
