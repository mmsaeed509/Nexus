// AI Tools data organized by categories

// Language Models & Chatbots
const languageModels = [
  {
    languageModelsID: 1,
    name: 'ChatGPT',
    description: 'Advanced conversational AI for text generation, translation, and more.',
    category: 'Language Models & Chatbots',
    websiteUrl: 'https://chat.openai.com/',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
  },
  {
    languageModelsID: 2,
    name: 'Claude',
    description: 'Anthropic\'s advanced AI assistant focused on helpfulness and harmlessness.',
    category: 'Language Models & Chatbots',
    websiteUrl: 'https://claude.ai/',
    iconUrl: 'https://claude.ai/favicon.ico'
  },
  {
    languageModelsID: 3,
    name: 'Gemini',
    description: 'Google\'s most capable AI model, multimodal reasoning with text, images, and code.',
    category: 'Language Models & Chatbots',
    websiteUrl: 'https://gemini.google.com/app',
    iconUrl: 'https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg'
  },
  {
    languageModelsID: 4,
    name: 'KimiAI',
    description: 'Intelligent conversational AI with strong contextual understanding.',
    category: 'Language Models & Chatbots',
    websiteUrl: 'https://kimi.moonshot.cn/',
    iconUrl: 'icons/kimiai.avif'
  },
  {
    languageModelsID: 5,
    name: 'Qwen',
    description: 'Alibaba\'s conversational AI model with multilingual capabilities.',
    category: 'Language Models & Chatbots',
    websiteUrl: 'https://chat.qwen.ai/',
    iconUrl: 'icons/qwen.png'
  },
  {
    languageModelsID: 6,
    name: 'Grok',
    description: 'xAI\'s conversational model with real-time data access and unique personality.',
    category: 'Language Models & Chatbots',
    websiteUrl: 'https://grok.com/',
    iconUrl: 'icons/Grok.webp'
  },
  {
    languageModelsID: 7,
    name: 'Le Chat - Mistral AI',
    description: 'French AI startup offering powerful open models with competitive performance.',
    category: 'Language Models & Chatbots',
    websiteUrl: 'https://chat.mistral.ai/',
    iconUrl: 'icons/mistral-ai.png'
  },
  {
    languageModelsID: 8,
    name: 'Meta AI',
    description: 'Meta\'s AI assistant integrated across Meta apps and services.',
    category: 'Language Models & Chatbots',
    websiteUrl: 'https://www.meta.ai/',
    iconUrl: 'icons/metaai.jpg'
  }
];

// Image Generation & Art
const imageGeneration = [
  {
    imageGenerationID: 1,
    name: 'Midjourney',
    description: 'Generative AI creating images from textual descriptions.',
    category: 'Image Generation & Art',
    websiteUrl: 'https://www.midjourney.com/',
    iconUrl: 'icons/Midjourney.png'
  },
  {
    imageGenerationID: 2,
    name: 'Stable Diffusion',
    description: 'Open-source text-to-image model for generating detailed visuals.',
    category: 'Image Generation & Art',
    websiteUrl: 'https://stablediffusionweb.com/',
    iconUrl: 'https://stablediffusionweb.com/images/logo.png'
  },
  {
    imageGenerationID: 3,
    name: 'Leonardo AI',
    description: 'Generate production-quality creative assets with AI.',
    category: 'Image Generation & Art',
    websiteUrl: 'https://app.leonardo.ai/',
    iconUrl: 'https://app.leonardo.ai/favicon.ico'
  },
  {
    imageGenerationID: 4,
    name: 'Civit AI',
    description: 'Community hub for Stable Diffusion models, prompts and resources.',
    category: 'Image Generation & Art',
    websiteUrl: 'https://civitai.com/',
    iconUrl: 'https://civitai.com/favicon.ico'
  },
  {
    imageGenerationID: 5,
    name: 'Ideogram',
    description: 'AI art generator specializing in text rendering and typography.',
    category: 'Image Generation & Art',
    websiteUrl: 'https://ideogram.ai/',
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEz///8AAABTU1P////////////////////////s7Oz29vZiYmIQEBAeHh7h4eHT09NCQkItLS3FxcV0dHQ6Ojq0tLSDg4OmpqaWlpZCl/6SAAAACnRSTlMA////ikVE3hjrhwjMiwAAARVJREFUKJF9UwuygyAQg2BfLX8UxN7/om+BYrW2ZkadJRp2Q2SMjcOdn3AfRka4Pc5UweNG3/3giB3ZsCsVX2IKeX6VA3vv5wADTBOgVduXvb+TIlhoKb2Abis7svAWjh4ay4EkTVJVM3T2fEXye1JGrXWkZUIoN3+SdQaLNxB+heikTOigzTJoFoGNjKIBWKmiazahk0rJBmeMLzMmU/stpE4pFCTNF1ibFbco0o2cXijklECKztpNVnZZSyPoHw0ZPKkZGuVZHfwyCs1CZrkvJtTFOVujdqQq9mWyrx1mPNi3Gb/wGEs/Z1lpSdaW9+LHedbDFtLDivCsWTjGhDJSzekxOQZM5qB9L4fraLK/i1Bf/Q7/6CUPuCjtwm8AAAAASUVORK5CYII='
  },
  {
    imageGenerationID: 6,
    name: 'DALL-E',
    description: 'OpenAI\'s advanced AI system that creates realistic images and art from natural language descriptions.',
    category: 'Image Generation & Art',
    websiteUrl: 'https://labs.openai.com/',
    iconUrl: 'https://labs.openai.com/favicon.ico'
  }
];

// AI Agent IDEs
const aiAgentIDEs = [
  {
    id: 1,
    name: "Junie AI",
    description: "JetBrains' AI-powered IDE assistant that helps developers write better code faster.",
    category: "AI Agent IDE",
    websiteUrl: "https://www.jetbrains.com/junie/",
    iconUrl: "icons/junie.png"
  },
  {
    id: 2,
    name: "Cursor",
    description: "The AI-first code editor that helps you code faster and smarter with built-in AI assistance.",
    category: "AI Agent IDE",
    websiteUrl: "https://www.cursor.com/",
    iconUrl: "icons/cursor.png"
  },
  {
    id: 3,
    name: "Windsurf",
    description: "Codeium's agentic IDE that combines AI capabilities with a seamless development experience.",
    category: "AI Agent IDE",
    websiteUrl: "https://codeium.com/windsurf",
    iconUrl: "icons/windsurf.png"
  }
];

// Development & Coding Tools
const developmentTools = [
  {
    id: 1,
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write better code faster.",
    category: "Development & Coding Tools",
    websiteUrl: "https://github.com/features/copilot",
    iconUrl: "icons/github-copilot.png"
  },
  {
    id: 2,
    name: "Tabnine",
    description: "AI code completion tool that helps developers write code faster.",
    category: "Development & Coding Tools",
    websiteUrl: "https://www.tabnine.com/",
    iconUrl: "icons/tabnine.png"
  },
  {
    id: 3,
    name: "Codeium",
    description: "AI-powered code completion and chat assistant for developers.",
    category: "Development & Coding Tools",
    websiteUrl: "https://codeium.com/",
    iconUrl: "icons/codeium.png"
  },
  {
    id: 4,
    name: "Amazon CodeWhisperer",
    description: "AI-powered code suggestions and security scanning.",
    category: "Development & Coding Tools",
    websiteUrl: "https://aws.amazon.com/codewhisperer/",
    iconUrl: "icons/codewhisperer.png"
  },
  {
    id: 5,
    name: "Replit Ghost",
    description: "AI pair programmer for the Replit development environment.",
    category: "Development & Coding Tools",
    websiteUrl: "https://replit.com/ghost",
    iconUrl: "icons/replit-ghost.png"
  },
  {
    id: 6,
    name: "CodeGeeX",
    description: "Multilingual code generation and completion tool.",
    category: "Development & Coding Tools",
    websiteUrl: "https://codegeex.cn/",
    iconUrl: "icons/codegeex.png"
  },
  {
    id: 7,
    name: "Codeium",
    description: "AI-powered code completion and chat assistant.",
    category: "Development & Coding Tools",
    websiteUrl: "https://codeium.com/",
    iconUrl: "icons/codeium.png"
  },
  {
    id: 8,
    name: "CodeWhisperer",
    description: "Amazon's AI-powered code suggestions tool.",
    category: "Development & Coding Tools",
    websiteUrl: "https://aws.amazon.com/codewhisperer/",
    iconUrl: "icons/codewhisperer.png"
  },
  {
    id: 9,
    name: "Codeium",
    description: "AI-powered code completion and chat assistant.",
    category: "Development & Coding Tools",
    websiteUrl: "https://codeium.com/",
    iconUrl: "icons/codeium.png"
  },
  {
    id: 10,
    name: "CodeWhisperer",
    description: "Amazon's AI-powered code suggestions tool.",
    category: "Development & Coding Tools",
    websiteUrl: "https://aws.amazon.com/codewhisperer/",
    iconUrl: "icons/codewhisperer.png"
  },
  {
    id: 11,
    name: "Chat2DB",
    description: "AI-powered database management and query tool.",
    category: "AI Agent IDE",
    websiteUrl: "https://chat2db.com/",
    iconUrl: "icons/chat2db.png"
  }
];

// Local & Desktop AI
const localAI = [
  {
    localAIID: 1,
    name: 'Jan AI',
    description: 'Open-source desktop app for running local LLMs with a user-friendly interface.',
    category: 'Local & Desktop AI',
    websiteUrl: 'https://jan.ai/',
    iconUrl: 'https://jan.ai/favicon.ico'
  },
  {
    localAIID: 2,
    name: 'Msty',
    description: 'Desktop application for running and fine-tuning language models locally.',
    category: 'Local & Desktop AI',
    websiteUrl: 'https://msty.app/',
    iconUrl: 'https://msty.app/favicon.ico'
  },
  {
    localAIID: 3,
    name: 'LM Studio',
    description: 'Desktop app for running local and private large language models with an intuitive UI.',
    category: 'Local & Desktop AI',
    websiteUrl: 'https://lmstudio.ai/',
    iconUrl: 'icons/lmstudio.webp'
  },
  {
    localAIID: 4,
    name: 'OpenWebUI',
    description: 'User-friendly web interface for Ollama, supporting multiple models and providing a modern chat experience.',
    category: 'Local & Desktop AI',
    websiteUrl: 'https://github.com/open-webui/open-webui',
    iconUrl: 'https://github.com/open-webui/open-webui/raw/main/static/logo.png'
  }
];

// Content Creation & Media
const contentCreation = [
  {
    contentCreationID: 1,
    name: 'RunwayML',
    description: 'Platform for artists and creators using AI for media synthesis.',
    category: 'Content Creation & Media',
    websiteUrl: 'https://app.runwayml.com/',
    iconUrl: 'icons/Runway_Black_Symbol_SVG.svg'
  },
  {
    contentCreationID: 2,
    name: 'V0',
    description: 'AI tool for generating UI designs and website components from text descriptions.',
    category: 'Content Creation & Media',
    websiteUrl: 'https://v0.dev/',
    iconUrl: 'icons/v0.png'
  },
  {
    contentCreationID: 3,
    name: 'Bolt AI',
    description: 'Quick AI-powered digital content creation tool.',
    category: 'Content Creation & Media',
    websiteUrl: 'https://bolt.new/',
    iconUrl: 'icons/bolt.svg'
  },
  {
    contentCreationID: 4,
    name: 'Gamma',
    description: 'AI-powered presentation and document creation platform for creating beautiful, interactive content.',
    category: 'Content Creation & Media',
    websiteUrl: 'https://gamma.app/',
    iconUrl: 'icons/gamma.svg'
  },
  {
    contentCreationID: 5,
    name: 'FreePik',
    description: 'AI-powered platform for creating and accessing high-quality design resources, including vectors, photos, and PSD files.',
    category: 'Content Creation & Media',
    websiteUrl: 'https://www.freepik.com/',
    iconUrl: 'https://www.freepik.com/favicon.ico'
  }
];

// AI Platforms & Infrastructure
const aiPlatforms = [
  {
    aiPlatformsID: 1,
    name: 'DeepSeek',
    description: 'AI platform focused on deep learning research and applications.',
    category: 'AI Platforms & Infrastructure',
    websiteUrl: 'https://chat.deepseek.com/',
    iconUrl: 'icons/deepseek.svg'
  },
  {
    aiPlatformsID: 2,
    name: 'DeepSite',
    description: 'AI platform focused on deep learning research and applications.',
    category: 'AI Platforms & Infrastructure',
    websiteUrl: 'https://huggingface.co/spaces/enzostvs/deepsite',
    iconUrl: 'icons/DeepSite.svg'
  },
  {
    aiPlatformsID: 3,
    name: 'Weights',
    description: 'Platform for discovering, training and deploying open source AI models.',
    category: 'AI Platforms & Infrastructure',
    websiteUrl: 'https://www.weights.com/',
    iconUrl: 'https://www.weights.com/favicon.ico'
  },
  {
    aiPlatformsID: 4,
    name: 'HuggingFace',
    description: 'Platform for discovering, sharing and collaborating on machine learning models.',
    category: 'AI Platforms & Infrastructure',
    websiteUrl: 'https://huggingface.co/',
    iconUrl: 'https://huggingface.co/favicon.ico'
  },
  {
    aiPlatformsID: 5,
    name: 'Fragments by E2B',
    description: 'Open-source Next.js template for building apps fully generated by AI with secure code execution.',
    category: 'AI Platforms & Infrastructure',
    websiteUrl: 'https://github.com/e2b-dev/fragments',
    iconUrl: 'icons/Fragments.png'
  },
  {
    aiPlatformsID: 6,
    name: 'Bolt.DIY',
    description: 'Open-source tool for building full-stack web applications using any LLM, with in-browser code execution.',
    category: 'AI Platforms & Infrastructure',
    websiteUrl: 'https://github.com/stackblitz-labs/bolt.diy',
    iconUrl: 'icons/Bolt.DIY.png'
  },
  {
    aiPlatformsID: 7,
    name: 'Janus',
    description: 'Unified multimodal understanding and generation model for handling various types of data and tasks.',
    category: 'AI Platforms & Infrastructure',
    websiteUrl: 'https://github.com/deepseek-ai/Janus',
    iconUrl: 'https://github.com/deepseek-ai/Janus/raw/main/assets/logo.png'
  }
];

// Business & Productivity
const businessTools = [
  {
    businessToolsID: 1,
    name: 'Chat2DB',
    description: 'AI-powered SQL generator and database client that connects to multiple data sources.',
    category: 'AI Agent IDE',
    websiteUrl: 'https://chat2db.ai/',
    iconUrl: 'icons/Chat2DB.png'
  },
  {
    businessToolsID: 2,
    name: 'ChatGPT Operator',
    description: 'A platform for building autonomous AI agents that can perform complex tasks across multiple applications.',
    category: 'AI Agent',
    websiteUrl: 'https://operator.chatgpt.com/',
    iconUrl: 'https://operator.chatgpt.com/favicon.ico'
  },
  {
    businessToolsID: 3,
    name: 'Genspark',
    description: 'AI-powered platform for creating personalized user experiences and intelligent customer interactions.',
    category: 'Content Creation & Media',
    websiteUrl: 'https://www.genspark.ai/',
    iconUrl: 'https://www.genspark.ai/favicon.ico'
  },
  {
    businessToolsID: 4,
    name: 'Tome',
    description: 'AI assistant for sales that helps identify strategic initiatives and key decision makers for account engagement.',
    category: 'Content Creation & Media',
    websiteUrl: 'https://tome.app/',
    iconUrl: 'https://tome.app/favicon.ico'
  }
];

// Privacy & Security
const privacyTools = [
  {
    privacyToolsID: 1,
    name: 'OnionGPT',
    description: 'Anonymous AI assistant accessible through the Tor network.',
    category: 'Privacy & Security',
    websiteUrl: 'http://oniongpt6lntsoztgylhju7nmqedlq6fjexe55z327lmxyae3nutlyad.onion/',
    iconUrl: 'https://www.torproject.org/static/images/favicon/favicon.ico'
  }
];

// VR/AR & Emerging Tech
const emergingTech = [
  {
    emergingTechID: 1,
    name: 'Manus',
    description: 'AI-powered hand tracking and haptic technology for immersive VR/AR experiences.',
    category: 'AI Agent',
    websiteUrl: 'https://manus.im/',
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFTElEQVR4AbVXA3czWBBd/5b11ratz7Zt27Zt1rYRp7b5NbaTfbfbnJO6Tbo95zbJ09yZNzNv5jv8GQwG4AcCK4LTBGkEVAL6LIGCM4fPtoYsyDQV/gvBIoIMAgaAjbMMnMmEDMgaljlE4HuCxQTlWDDZIXq9nq7T6UaP04AZEGFCFmRCNghYg9VUwjUaDePhg3vdly6c65dIJEwjoZqaqtrmpsbqGVrDaAkrEDg9kclNNZNIxMxFC+ZInB1tdBRKeT3mamtrakND/JWrVy0TgZQZV3IaBNLGI9DV1VkVF/ulrb29rcpI5OiRg4PW//xuePrkYRfGrl652Gf192+Ggwf2cGAhMwikgQBlPM3v373dY2P1hyEqIkQeH/e1DeMfP7xrNwqERZYuni9xcrDW5+XlNBlJzhDU7yaahHm3bl4vcLD7R+/m4qBNSIhr7exor9qxbTP/06f37RwOhx0dGSoPDwtU9Pb2VpobHRMSgEYymYz56OG9bj8fD/WD+3e6MaZSqRiIBKCwIK+xuLiwUaFQMPr7+yo5nEG2VqudLQLwfDWjva2tOj09taW1taVap9OaOiZAYzLodTu2b+aHEWeMjgyR371zs0culzEtJgCBB/bv4QQH+qhgAZh7356d3ERyFZzBQTaEV1dV1kaGByvgmL7ebmo3F3st8QldQnxcK+bNJiCTSZnbtm7k42A/H/ch4d6erho4pb3t3/r5c6NkuJL1a1cJsWb71k385uamamNUnDl9YsASC9BqqqpqPd2dNEEBPioajVrP5/NYdXW1Na9fvehcvXKpGLkAgoHIiGAFhGMfBIPAnds3eiyxAK2xob7Gh5jU19tdnZ+X2wSHGz6QKhaLmRnpqc3QOiw0QJmclNCKOeKITCQkRE1OdlaTRVegVqsZp08e+2Zr/afBy8NFs3/vLi7JBa0f3r9tP3xoHwehuGf3dt75c6cH2tpaq7FHpVIy1q9bJcQeWMpiJ+Tz+azr1y71Bfp7qXAoNMP921j9Dj8wwB8wHhMdJi/Izx3S+Mvnj21ITBHhQQoQszgMEdO4X4QZ7js02F/54sXTzqzM9Oa3b151wAlBIjoqTI4kpST5YMum9QKQe/f2dQdIAWYTAJRKJWPj+jVCO5u/DG9evzQ9lCYgVtq0Ya0QVnn29HEXfOTenVs9cMTjxw4NlpWWNLwkhIUCAstsAsTpWOQVlMK0GRlpzaNeSuqnj+/bofE+4icYe/XyeSd+uzrbab08nDW4OuQOzJlFALhw/kw/Dl1CHh8ej8sWEI2yszKbW1uaq9+/e9OBa9i9cxsPa5GSr1y+0BcRFqTA+LBTdlhCgIb3n2ikmxsTIUMYfibOBs38fT3USFQg9/DB3W4TIbRbN6/1Gp03wVILdHd3VYWHBChA4uWLZ50VFWUNu3Zu5SH/B5Ao2UtSNDQ3rhcI+KxlSxZI4Lh4SSsqyhssIgDAyVycbHVDqXhetOzY0YODyHipKUktXC6HbXofom6Az8AyiBwogHmLCOAZRjJavmyR2NXFXgftEBk+Xq4ajJ08cfTbi+dPO2/euNob6O+tgvmxZuOGNUIkKYsJGDUUiUQsKqWiHhbZt3cnFxXT8NswnJyAP4fI4fPBvf/qiMkImNOA0AC8EQMDA5WlJcUNz58+6ZxHXklT4bAOm82qm4QAZcKi1AxC1LjYr62O9lZ6EIBFYCG8K1MVpadnqxMSCYUs1BHQHjVEFSlYQG6qstzKtDGxFChQUc7Xk/ptGo2J9bRaM3N9ZLqt2ejmlPn/NafAqOZ0VHtubdKeU2ZRONWkPbcybc//BZnHVLQkHQqfAAAAAElFTkSuQmCC'
  }
];

// AI Terminals
const aiTerminals = [
  {
    id: 1,
    name: "Warp",
    description: "The intelligent terminal that combines AI and your dev team's knowledge in one fast, intuitive interface.",
    category: "AI Terminals",
    websiteUrl: "https://www.warp.dev/",
    iconUrl: "icons/warp.png"
  },
  {
    id: 2,
    name: "Wave",
    description: "An open-source terminal with superpowers, integrating file previews, file editing, AI, web browsing, and workspace organization.",
    category: "AI Terminals",
    websiteUrl: "https://www.waveterm.dev/",
    iconUrl: "icons/wave.png"
  },
  {
    id: 3,
    name: "Fig",
    description: "AI-powered terminal with intelligent command suggestions and autocomplete.",
    category: "AI Terminals",
    websiteUrl: "https://fig.io/",
    iconUrl: "icons/fig.png"
  }
];

// Combine all tools into a single array
const aiTools = [
  ...languageModels,
  ...imageGeneration,
  ...developmentTools,
  ...localAI,
  ...contentCreation,
  ...aiPlatforms,
  ...businessTools,
  ...privacyTools,
  ...emergingTech,
  ...aiAgentIDEs,
  ...aiTerminals
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Render AI tools
  renderAITools(aiTools);
  
  // Setup search functionality
  setupSearch();
  
  // Setup category filtering
  setupCategoryFilter();
  
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-link');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navLinks.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
    
    // Close menu when clicking a link
    navLinksItems.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
    
    // Prevent menu from closing when clicking inside it
    navLinks.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }
});

// Function to setup category filtering
function setupCategoryFilter() {
  const navLinks = document.querySelectorAll('.nav-link');
  let currentCategory = 'all';
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Get category from data attribute
      currentCategory = this.getAttribute('data-category');
      
      // Filter and render tools
      const filteredTools = currentCategory === 'all' 
        ? aiTools 
        : aiTools.filter(tool => tool.category === currentCategory);
      
      renderAITools(filteredTools, true);
      
      // Close mobile menu if open
      const mobileMenu = document.querySelector('.nav-links');
      const mobileToggle = document.querySelector('.mobile-menu-toggle');
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
      }
    });
  });
}

// Function to setup search
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
  // Search on button click
  searchButton.addEventListener('click', () => {
    searchButton.classList.add('searching');
    performSearch();
    setTimeout(() => {
      searchButton.classList.remove('searching');
    }, 600);
  });
  
  // Search on Enter key press
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      searchButton.classList.add('searching');
      performSearch();
      setTimeout(() => {
        searchButton.classList.remove('searching');
      }, 600);
    }
  });
  
  // Add scanning animation when typing
  searchInput.addEventListener('input', () => {
    searchInput.classList.add('scanning');
    setTimeout(() => {
      searchInput.classList.remove('scanning');
    }, 800);
  });
}

// Function to perform search
function performSearch() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.trim().toLowerCase();
  
  // Get current active category
  const activeCategory = document.querySelector('.nav-link.active').getAttribute('data-category');
  
  // Filter tools based on both search query and category
  let filteredTools = aiTools;
  
  if (activeCategory !== 'all') {
    filteredTools = filteredTools.filter(tool => tool.category === activeCategory);
  }
  
  if (query !== '') {
    filteredTools = filteredTools.filter(tool => 
      tool.name.toLowerCase().includes(query) || 
      tool.description.toLowerCase().includes(query) || 
      tool.category.toLowerCase().includes(query)
    );
  }
  
  // Add a small delay before rendering to allow for the button animation
  setTimeout(() => {
    renderAITools(filteredTools, true);
  }, 300);
}

// Function to render AI tools
function renderAITools(toolsToRender = aiTools, withAnimation = false) {
  const toolsContainer = document.getElementById('toolsContainer');
  toolsContainer.innerHTML = '';
  
  if (toolsToRender.length === 0) {
    toolsContainer.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">⚠️</div>
        <h3 class="squares-font">No Results Found</h3>
        <p class="squares-light-font">Try a different search term or explore our featured tools.</p>
      </div>
    `;
    return;
  }
  
  toolsToRender.forEach(tool => {
    const toolCard = document.createElement('a');
    toolCard.className = `tool-card ${withAnimation ? 'tool-appear' : ''}`;
    toolCard.href = tool.websiteUrl;
    toolCard.target = "_blank";
    toolCard.rel = "noopener noreferrer";
    
    // Create an image element with fallback handling
    const imgElement = `
      <img src="${tool.iconUrl}" alt="${tool.name} logo" class="tool-icon" 
           onerror="this.onerror=null; this.src='artwork/default-icon.svg'; this.classList.add('fallback-icon')">
    `;
    
    toolCard.innerHTML = `
      <div class="tool-header">
        <h2 class="tool-name">${tool.name}</h2>
        ${imgElement}
      </div>
      <div class="tool-content">
        <p class="tool-description">${tool.description}</p>
        <div class="tool-footer">
          <span class="tool-category">${tool.category}</span>
          <span class="visit-site">Click to Open Tool</span>
        </div>
      </div>
    `;
    
    toolsContainer.appendChild(toolCard);
  });
}

// Function to add a new AI tool (could be used with a form in the future)
function addAITool(name, description, category, websiteUrl, iconUrl) {
  let newTool;
  
  // Add to appropriate category array with category-specific ID
  switch(category) {
    case 'Language Models & Chatbots':
      newTool = {
        languageModelsID: languageModels.length + 1,
        name,
        description,
        category,
        websiteUrl,
        iconUrl
      };
      languageModels.push(newTool);
      break;
    case 'Image Generation & Art':
      newTool = {
        imageGenerationID: imageGeneration.length + 1,
        name,
        description,
        category,
        websiteUrl,
        iconUrl
      };
      imageGeneration.push(newTool);
      break;
    case 'Development & Coding Tools':
      newTool = {
        developmentToolsID: developmentTools.length + 1,
        name,
        description,
        category,
        websiteUrl,
        iconUrl
      };
      developmentTools.push(newTool);
      break;
    case 'Local & Desktop AI':
      newTool = {
        localAIID: localAI.length + 1,
        name,
        description,
        category,
        websiteUrl,
        iconUrl
      };
      localAI.push(newTool);
      break;
    case 'Content Creation & Media':
      newTool = {
        contentCreationID: contentCreation.length + 1,
        name,
        description,
        category,
        websiteUrl,
        iconUrl
      };
      contentCreation.push(newTool);
      break;
    case 'AI Platforms & Infrastructure':
      newTool = {
        aiPlatformsID: aiPlatforms.length + 1,
        name,
        description,
        category,
        websiteUrl,
        iconUrl
      };
      aiPlatforms.push(newTool);
      break;
    case 'Business & Productivity':
      newTool = {
        businessToolsID: businessTools.length + 1,
        name,
        description,
        category,
        websiteUrl,
        iconUrl
      };
      businessTools.push(newTool);
      break;
    case 'Privacy & Security':
      newTool = {
        privacyToolsID: privacyTools.length + 1,
        name,
        description,
        category,
        websiteUrl,
        iconUrl
      };
      privacyTools.push(newTool);
      break;
    case 'VR/AR & Emerging Tech':
      newTool = {
        emergingTechID: emergingTech.length + 1,
        name,
        description,
        category,
        websiteUrl,
        iconUrl
      };
      emergingTech.push(newTool);
      break;
    default:
      console.warn('Unknown category:', category);
      return null;
  }
  
  // Add to main array
  aiTools.push(newTool);
  renderAITools();
  
  return newTool;
}

// Matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.classList.add('matrix-rain');
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 33);
}

// Initialize Matrix rain effect
createMatrixRain(); 