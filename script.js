// AI Tools data
const aiTools = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Advanced conversational AI for text generation, translation, and more.',
    category: 'Language Model',
    websiteUrl: 'https://chat.openai.com/',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
  },
  {
    id: 2,
    name: 'DeepSeek',
    description: 'AI platform focused on deep learning research and applications.',
    category: 'Research Platform',
    websiteUrl: 'https://chat.deepseek.com/',
    iconUrl: 'icons/deepseek.svg'
  },
  {
    id: 3,
    name: 'Midjourney',
    description: 'Generative AI creating images from textual descriptions.',
    category: 'Image Generation',
    websiteUrl: 'https://www.midjourney.com/',
    iconUrl: 'icons/Midjourney.png'
  },
  {
    id: 4,
    name: 'Stable Diffusion',
    description: 'Open-source text-to-image model for generating detailed visuals.',
    category: 'Image Generation',
    websiteUrl: 'https://stablediffusionweb.com/',
    iconUrl: 'https://stablediffusionweb.com/images/logo.png'
  },
  {
    id: 5,
    name: 'GitHub Copilot',
    description: 'AI pair programmer that assists developers in writing code.',
    category: 'Developer Tool',
    websiteUrl: 'https://github.com/copilot',
    iconUrl: 'icons/github-copilot.png'
  },
  {
    id: 6,
    name: 'RunwayML',
    description: 'Platform for artists and creators using AI for media synthesis.',
    category: 'Creative Suite',
    websiteUrl: 'https://app.runwayml.com/',
    iconUrl: 'icons/Runway_Black_Symbol_SVG.svg'
  },
  {
    id: 7,
    name: 'KimiAI',
    description: 'Intelligent conversational AI with strong contextual understanding.',
    category: 'Language Model',
    websiteUrl: 'https://kimi.moonshot.cn/',
    iconUrl: 'icons/kimiai.avif'
  },
  {
    id: 8,
    name: 'Claude',
    description: 'Anthropic\'s advanced AI assistant focused on helpfulness and harmlessness.',
    category: 'Language Model',
    websiteUrl: 'https://claude.ai/',
    iconUrl: 'https://claude.ai/favicon.ico'
  },
  {
    id: 9,
    name: 'WebDev Arena',
    description: 'AI-powered environment for web development and testing.',
    category: 'Developer Tool',
    websiteUrl: 'https://web.lmarena.ai/',
    iconUrl: 'https://web.lmarena.ai/favicon.ico'
  },
  {
    id: 10,
    name: 'Qwen',
    description: 'Alibaba\'s conversational AI model with multilingual capabilities.',
    category: 'Language Model',
    websiteUrl: 'https://chat.qwen.ai/',
    iconUrl: 'icons/qwen.png'
  },
  {
    id: 11,
    name: 'V0',
    description: 'AI tool for generating UI designs and website components from text descriptions.',
    category: 'Design Tool',
    websiteUrl: 'https://v0.dev/',
    iconUrl: 'icons/v0.png'
  },
  {
    id: 12,
    name: 'Grok',
    description: 'xAI\'s conversational model with real-time data access and unique personality.',
    category: 'Language Model',
    websiteUrl: 'https://grok.com/',
    iconUrl: 'icons/Grok.webp'
  },
  {
    id: 13,
    name: 'Le Chat - Mistral AI',
    description: 'French AI startup offering powerful open models with competitive performance.',
    category: 'Language Model',
    websiteUrl: 'https://chat.mistral.ai/',
    iconUrl: 'icons/mistral-ai.png'
  },
  {
    id: 14,
    name: 'Meta AI',
    description: 'Meta\'s AI assistant integrated across Meta apps and services.',
    category: 'Language Model',
    websiteUrl: 'https://www.meta.ai/',
    iconUrl: 'icons/metaai.jpg'
  },
  {
    id: 15,
    name: 'Meta AI Studio',
    description: 'Platform for creating AI-generated images on Instagram.',
    category: 'Image Generation',
    websiteUrl: 'https://aistudio.instagram.com/',
    iconUrl: 'icons/metaai.jpg'
  },
  {
    id: 16,
    name: 'Gemini',
    description: 'Google\'s most capable AI model, multimodal reasoning with text, images, and code.',
    category: 'Language Model',
    websiteUrl: 'https://gemini.google.com/app',
    iconUrl: 'https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg'
  },
  {
    id: 17,
    name: 'Weights',
    description: 'Platform for discovering, training and deploying open source AI models.',
    category: 'Development Platform',
    websiteUrl: 'https://www.weights.com/',
    iconUrl: 'https://www.weights.com/favicon.ico'
  },
  {
    id: 18,
    name: 'Bolt AI',
    description: 'Quick AI-powered digital content creation tool.',
    category: 'Content Creation',
    websiteUrl: 'https://bolt.new/',
    iconUrl: 'icons/bolt.svg'
  },
  {
    id: 19,
    name: 'Leonardo AI',
    description: 'Generate production-quality creative assets with AI.',
    category: 'Image Generation',
    websiteUrl: 'https://app.leonardo.ai/',
    iconUrl: 'https://app.leonardo.ai/favicon.ico'
  },
  {
    id: 20,
    name: 'Civit AI',
    description: 'Community hub for Stable Diffusion models, prompts and resources.',
    category: 'Image Generation',
    websiteUrl: 'https://civitai.com/',
    iconUrl: 'https://civitai.com/favicon.ico'
  },
  {
    id: 21,
    name: 'Ideogram',
    description: 'AI art generator specializing in text rendering and typography.',
    category: 'Image Generation',
    websiteUrl: 'https://ideogram.ai/',
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEz///8AAABTU1P////////////////////////s7Oz29vZiYmIQEBAeHh7h4eHT09NCQkItLS3FxcV0dHQ6Ojq0tLSDg4OmpqaWlpZCl/6SAAAACnRSTlMA////ikVE3hjrhwjMiwAAARVJREFUKJF9UwuygyAQg2BfLX8UxN7/om+BYrW2ZkadJRp2Q2SMjcOdn3AfRka4Pc5UweNG3/3giB3ZsCsVX2IKeX6VA3vv5wADTBOgVduXvb+TIlhoKb2Abis7svAWjh4ay4EkTVJVM3T2fEXye1JGrXWkZUIoN3+SdQaLNxB+heikTOigzTJoFoGNjKIBWKmiazahk0rJBmeMLzMmU/stpE4pFCTNF1ibFbco0o2cXijklECKztpNVnZZSyPoHw0ZPKkZGuVZHfwyCs1CZrkvJtTFOVujdqQq9mWyrx1mPNi3Gb/wGEs/Z1lpSdaW9+LHedbDFtLDivCsWTjGhDJSzekxOQZM5qB9L4fraLK/i1Bf/Q7/6CUPuCjtwm8AAAAASUVORK5CYII='
  },
  {
    id: 22,
    name: 'HuggingFace',
    description: 'Platform for discovering, sharing and collaborating on machine learning models.',
    category: 'Development Platform',
    websiteUrl: 'https://huggingface.co/',
    iconUrl: 'https://huggingface.co/favicon.ico'
  },
  {
    id: 23,
    name: 'OnionGPT',
    description: 'Anonymous AI assistant accessible through the Tor network.',
    category: 'Privacy-Focused AI',
    websiteUrl: 'http://oniongpt6lntsoztgylhju7nmqedlq6fjexe55z327lmxyae3nutlyad.onion/',
    iconUrl: 'https://www.torproject.org/static/images/favicon/favicon.ico'
  },
  {
    id: 24,
    name: 'Replit',
    description: 'Browser-based IDE with AI coding assistance and collaborative development features.',
    category: 'Development Platform',
    websiteUrl: 'https://replit.com/',
    iconUrl: 'https://play-lh.googleusercontent.com/baV9RL2D0iV8JkTtCzSxeLf6XxCJMWQYbyXMqyQfc0OQGtjkCyUenUbLb5tefYfMxfU=w240-h480-rw'
  },
  {
    id: 25,
    name: 'Jan AI',
    description: 'Open-source desktop app for running local LLMs with a user-friendly interface.',
    category: 'Desktop LLM',
    websiteUrl: 'https://jan.ai/',
    iconUrl: 'https://jan.ai/favicon.ico'
  },
  {
    id: 26,
    name: 'Msty',
    description: 'Desktop application for running and fine-tuning language models locally.',
    category: 'Desktop LLM',
    websiteUrl: 'https://msty.app/',
    iconUrl: 'https://msty.app/favicon.ico'
  },
  {
    id: 27,
    name: 'LM Studio',
    description: 'Desktop app for running local and private large language models with an intuitive UI.',
    category: 'Desktop LLM',
    websiteUrl: 'https://lmstudio.ai/',
    iconUrl: 'icons/lmstudio.webp'
  },
  {
    id: 28,
    name: 'Junie',
    description: 'JetBrains\' AI assistant that integrates with their IDEs for coding and development.',
    category: 'AI Coding IDE',
    websiteUrl: 'https://www.jetbrains.com/junie/',
    iconUrl: 'https://blog.jetbrains.com/wp-content/uploads/2025/01/Group-10.svg'
  },
  {
    id: 29,
    name: 'Cursor AI',
    description: 'AI-powered code editor built on VSCode with chat, edit, and generation capabilities.',
    category: 'AI Coding IDE',
    websiteUrl: 'https://www.cursor.com/',
    iconUrl: 'icons/cursor.png'
  },
  {
    id: 30,
    name: 'Windsurf',
    description: 'AI-powered coding assistant by Codeium with advanced code understanding and generation.',
    category: 'AI Coding IDE',
    websiteUrl: 'https://codeium.com/download',
    iconUrl: 'https://codeium.com/favicon.ico'
  },
  {
    id: 31,
    name: 'Fragments by E2B',
    description: 'Open-source Next.js template for building apps fully generated by AI with secure code execution.',
    category: 'AI Application Framework',
    websiteUrl: 'https://github.com/e2b-dev/fragments',
    iconUrl: 'https://raw.githubusercontent.com/e2b-dev/fragments/main/preview.png'
  },
  {
    id: 32,
    name: 'Chat2DB',
    description: 'AI-powered SQL generator and database client that connects to multiple data sources.',
    category: 'Database Tool',
    websiteUrl: 'https://chat2db.ai/',
    iconUrl: 'icons/Chat2DB.png'
  },
  {
    id: 33,
    name: 'Manus',
    description: 'AI-powered hand tracking and haptic technology for immersive VR/AR experiences.',
    category: 'VR/AR Technology',
    websiteUrl: 'https://manus.im/',
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFTElEQVR4AbVXA3czWBBd/5b11ratz7Zt27Zt1rYRp7b5NbaTfbfbnJO6Tbo95zbJ09yZNzNv5jv8GQwG4AcCK4LTBGkEVAL6LIGCM4fPtoYsyDQV/gvBIoIMAgaAjbMMnMmEDMgaljlE4HuCxQTlWDDZIXq9nq7T6UaP04AZEGFCFmRCNghYg9VUwjUaDePhg3vdly6c65dIJEwjoZqaqtrmpsbqGVrDaAkrEDg9kclNNZNIxMxFC+ZInB1tdBRKeT3mamtrakND/JWrVy0TgZQZV3IaBNLGI9DV1VkVF/ulrb29rcpI5OiRg4PW//xuePrkYRfGrl652Gf192+Ggwf2cGAhMwikgQBlPM3v373dY2P1hyEqIkQeH/e1DeMfP7xrNwqERZYuni9xcrDW5+XlNBlJzhDU7yaahHm3bl4vcLD7R+/m4qBNSIhr7exor9qxbTP/06f37RwOhx0dGSoPDwtU9Pb2VpobHRMSgEYymYz56OG9bj8fD/WD+3e6MaZSqRiIBKCwIK+xuLiwUaFQMPr7+yo5nEG2VqudLQLwfDWjva2tOj09taW1taVap9OaOiZAYzLodTu2b+aHEWeMjgyR371zs0culzEtJgCBB/bv4QQH+qhgAZh7356d3ERyFZzBQTaEV1dV1kaGByvgmL7ebmo3F3st8QldQnxcK+bNJiCTSZnbtm7k42A/H/ch4d6erho4pb3t3/r5c6NkuJL1a1cJsWb71k385uamamNUnDl9YsASC9BqqqtqPd2dNEEBPioajVrP5/NYdXW1Na9fvehcvXKpGLkAgoHIiGAFhGMfBIPAnds3eiyxAK2xob7Gh5jU19tdnZ+X2wSHGz6QKhaLmRnpqc3QOiw0QJmclNCKOeKITCQkRE1OdlaTRVegVqsZp08e+2Zr/afBy8NFs3/vLi7JBa0f3r9tP3xoHwehuGf3dt75c6cH2tpaq7FHpVIy1q9bJcQeWMpiJ+Tz+azr1y71Bfp7qXAoNMP921j9Dj8wwB8wHhMdJi/Izx3S+Mvnj21ITBHhQQoQszgMEdO4X4QZ7js02F/54sXTzqzM9Oa3b151wAlBIjoqTI4kpST5YMum9QKQe/f2dQdIAWYTAJRKJWPj+jVCO5u/DG9evzQ9lCYgVtq0Ya0QVnn29HEXfOTenVs9cMTjxw4NlpWWNLwkhIUCActsAsTpWOQVlMK0GRlpzaNeSuqnj+/bofE+4icYe/XyeSd+uzrbab08nDW4OuQOzJlFALhw/kw/Dl1CHh8ej8sWEI2yszKbW1uaq9+/e9OBa9i9cxsPa5GSr1y+0BcRFqTA+LBTdlhCgIb3n2ikmxsTIUMYfibOBs38fT3USFQg9/DB3W4TIbRbN6/1Gp03wVILdHd3VYWFBChA4uWLZ50VFWUNu3Zu5SH/B5Ao2UtSNDQ3rhcI+KxlSxZI4Lh4SSsqyhssIgDAyVycbHVDqXhetOzY0YODyHipKUktXC6HbVofom6Az8AyiBwogHmLCOAZRjJavmyR2NXFXgftEBk+Xq4ajJ08cfTbi+dPO2/euNob6O+tgvmxZuOGNUIkKYsJGDUUiUQsKqWiHhbZt3cnFxXT8NswnJyAP4fI4fPBvf/qiMkImNOA0AC8EQMDA5WlJcUNz5896ZxHXklT4bAOm82qm4QAZcKi1AxC1LjYr62O9lZ6EIBFYCG8K1MVpadnqxMSCYUs1BHQHjVEFSlYQG6qstzKtDGxFChQUc7Xk/phGo2J9bRaM3N9ZLqt2ejmlPn/NafAqOZ0VHtubdKeU2ZRONWkPbcybc//BZnHVLQkHQqfAAAAAElFTkSuQmCC'
  }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Render AI tools
  renderAITools(aiTools);
  
  // Setup search functionality
  setupSearch();
  
  // Add event listener for mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = navLinks.contains(event.target) || mobileMenuToggle.contains(event.target);
      
      if (!isClickInside && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });
    
    // Add active class to nav links when clicked
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        navItems.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        
        // Close mobile menu after clicking a link
        if (window.innerWidth <= 767) {
          navLinks.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        }
      });
    });
  }
});

// Function to setup search
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
  // Search on button click
  searchButton.addEventListener('click', () => {
    performSearch();
  });
  
  // Search on Enter key press
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  // Add scanning animation when typing
  searchInput.addEventListener('input', () => {
    searchInput.classList.add('scanning');
    setTimeout(() => {
      searchInput.classList.remove('scanning');
    }, 800);
  });
  
  // Add click animation to search button
  searchButton.addEventListener('mousedown', () => {
    searchButton.classList.add('searching');
    setTimeout(() => {
      searchButton.classList.remove('searching');
    }, 600);
  });
}

// Function to perform search
function performSearch() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.trim().toLowerCase();
  
  if (query === '') {
    renderAITools(aiTools);
    return;
  }
  
  const filteredTools = aiTools.filter(tool => 
    tool.name.toLowerCase().includes(query) || 
    tool.description.toLowerCase().includes(query) || 
    tool.category.toLowerCase().includes(query)
  );
  
  renderAITools(filteredTools, true);
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
          <span class="visit-site">Open Tool</span>
        </div>
      </div>
    `;
    
    toolsContainer.appendChild(toolCard);
  });
}

// Function to add a new AI tool (could be used with a form in the future)
function addAITool(name, description, category, websiteUrl, iconUrl) {
  const newId = aiTools.length > 0 ? Math.max(...aiTools.map(tool => tool.id)) + 1 : 1;
  
  const newTool = {
    id: newId,
    name,
    description,
    category,
    websiteUrl,
    iconUrl
  };
  
  aiTools.push(newTool);
  renderAITools();
  
  return newTool;
} 