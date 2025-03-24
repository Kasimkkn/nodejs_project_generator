import inquirer from "inquirer";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { downgradeReactVersion, setupShadCNComponents, setupTailwindCSS, waitForDirectory } from "./utils.js";
import generateSectionCode from "./generae-code.js";

const initializeProject = async () => {
  console.log("\n🚀 Welcome to the AI Project Generator!\n");

  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      default: "nextjs-app",
    }
  ]);

  const projectPath = path.join(process.cwd(), projectName);

  if (fs.existsSync(projectPath)) {
    console.log("❌ Directory already exists. Please choose another name.");
    return;
  }

  console.log(`🚀 Creating Next.js project: ${projectName}...\n`);

  execSync(
    `npx create-next-app@latest ${projectName} --ts --eslint --tailwind --no-src-dir --no-turbo --app --import-alias "@/" --yes`,
    { stdio: "inherit" }
  );
  console.log("✅ Next.js project created!");

  await waitForDirectory(projectPath);
  process.chdir(projectPath);
  console.log(`📂 Changed working directory to: ${projectPath}`);

  downgradeReactVersion(projectPath);
  setupTailwindCSS(projectPath);
  setupShadCNComponents(projectPath);
  createLandingPage(projectPath);
  console.log("🎉 Project setup completed successfully!");
};


const createLandingPage = (projectPath) => {
  console.log("\n🎨 Creating landing page sections...");

  const uiDir = path.join(projectPath, "/components");
  const pagesDir = path.join(projectPath, "/app");

  const sections = [
    "Header",
    "HeroSection",
    "FeatureSection",
    "ServiceSection",
    "BlogSection",
    "TestimonialSection",
    "Footer",
  ];

  sections.forEach((section) => {
    const componentPath = path.join(uiDir, `${section}.tsx`);
    const componentCode = generateSectionCode(section);
    fs.writeFileSync(componentPath, componentCode.trim());
    console.log(`✅ ${section} component created!`);
  });

  const homePagePath = path.join(pagesDir, "page.tsx");
  fs.writeFileSync(homePagePath, "");

  const homePageCode = `
    import React from 'react';
    ${sections.map((s) => `import ${s} from '@/components/${s}';`).join("\n")}

    const Home = () => (
      <>
        <Header />
        <HeroSection />
        <FeatureSection />
        <ServiceSection />
        <BlogSection />
        <TestimonialSection />
        <Footer />
      </>
    );

    export default Home;
  `;
  fs.writeFileSync(homePagePath, homePageCode.trim());
  console.log("✅ Home page created!");
};


initializeProject();
