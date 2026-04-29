import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";

const isDev = process.env.ROLLUP_WATCH === "true" || process.env.BUILD_MODE === "dev";

export default {
    input: "src/index.tsx",
    output: {
        file: "dist/bundle.js",
        format: "esm",
        sourcemap: true,
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
            preventAssignment: true,
        }),
        resolve({
            browser: true,
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }),
        commonjs(),
        postcss(),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        isDev &&
            serve({
                open: true,
                contentBase: ["dist", "public"],
                port: 3000,
            }),
        isDev && livereload("dist"),
        !isDev && terser(),
    ],
};
