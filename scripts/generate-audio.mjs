import fs from "fs";
import path from "path";
import * as googleTTS from "google-tts-api";
import https from "https";

const narrationMap = {
  splash: "आओ बेटी, एक कहानी सुनो। ये कविता की कहानी है। खेलो, सीखो, बचाओ।",
  setup: "कविता गाँव में रहती है। पहले काम चुनो, फिर सपना।",
  kharif: "पैसा आया है। सोचो, किस थैले में रखोगी? घर का या काम का? कार्ड को खींचो।",
  savings: "अब कुछ पैसे बचाओगी? सिक्के को दाईं ओर खींचो बचाने के लिए।",
  scheme: "सरकारी सुरक्षा कवच आया है। लेना है तो दाईं ओर खींचो।",
  crisis: "तीन महीने बाद, रामू गिर गया। पैर टूट गया। अब देखो क्या होता है।",
  otp: "अरे! एक अनजान फ़ोन आ रहा है। बैंक KYC बोल रहा है। बाईं ओर खींचो फ़ोन काटने के लिए!",
  report: "मौसम पूरा हुआ। देखो कविता कहाँ पहुँची। बटुआ, बचत, और हिम्मत।",
};

const outputDir = path.join(process.cwd(), "public", "audio");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadAudio(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

async function generateAll() {
  console.log("🎙️ Generating high-fidelity AI Audio...");

  for (const [key, text] of Object.entries(narrationMap)) {
    try {
      const url = googleTTS.getAudioUrl(text, {
        lang: "hi", // Hindi
        slow: false,
        host: "https://translate.google.com",
      });
      const dest = path.join(outputDir, `${key}.mp3`);
      await downloadAudio(url, dest);
      console.log(`✅ Generated: ${key}.mp3`);
    } catch (error) {
      console.error(`❌ Failed: ${key}.mp3`, error);
    }
  }

  console.log("🎉 All audio files generated directly into public/audio!");
}

generateAll();
