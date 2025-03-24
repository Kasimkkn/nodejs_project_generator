import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { execSync } from "child_process";
export const downgradeReactVersion = (projectPath) => {
    console.log("\n🔧 Downgrading React to version 18...");

    const packageJsonPath = path.join(projectPath, "package.json");
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

    packageJson.dependencies["react"] = "^18.3.1";
    packageJson.dependencies["react-dom"] = "^18.3.1";

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    execSync(`cd ${projectPath} && npm install --legacy-peer-deps`, { stdio: "inherit" });

    console.log("✅ React downgraded to version 18!");
};


export const setupTailwindCSS = (projectPath) => {
    console.log("\n🔧 Setting up Tailwind CSS...");
    execSync(`cd ${projectPath} && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`, { stdio: "inherit" });
    const tailwindConfigPath = path.join(projectPath, "tailwind.config.js");
    const tailwindConfig = `
      /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
    `;
    fs.writeFileSync(tailwindConfigPath, tailwindConfig.trim());
    console.log("✅ Tailwind CSS configured!");
};

export const waitForDirectory = async (dirPath, retries = 20, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
        if (fs.existsSync(dirPath)) return true;
        console.log(`Waiting for directory: ${dirPath}... (Attempt ${i + 1})`);
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
    throw new Error(`Timeout: Directory '${dirPath}' was not created in time.`);
};

export const setupShadCNComponents = (projectPath, components) => {
    console.log("\n🎨 Setting up ShadCN components...");
    try {
        execSync(`cd ${projectPath} && npx shadcn@latest init -d -y`, { stdio: "inherit" });

        // const componentList = ["button", "navigation-menu"];
        components.forEach((component) => {
            console.log(`Adding ${component}...`);
            execSync(`cd ${projectPath} && npx shadcn@latest add ${component} -y`, { stdio: "inherit" });
        });

        console.log("✅ ShadCN components added!");
    } catch (error) {
        console.error("❌ Failed to set up ShadCN components:", error.message);
    }
};