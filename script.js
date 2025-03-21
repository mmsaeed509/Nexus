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
    iconUrl: 'https://static.deepseek.com/favicon/favicon-196x196.png'
  },
  {
    id: 3,
    name: 'Midjourney',
    description: 'Generative AI creating images from textual descriptions.',
    category: 'Image Generation',
    websiteUrl: 'https://www.midjourney.com/',
    iconUrl: 'https://assets-global.website-files.com/6417b97a3eeb051d8ff2fd84/64340d093371d1ab0ccdf241_midjourney_logo-p-500.png'
  },
  {
    id: 4,
    name: 'Stable Diffusion',
    description: 'Open-source text-to-image model for generating detailed visuals.',
    category: 'Image Generation',
    websiteUrl: 'https://stablediffusionweb.com/',
    iconUrl: 'https://stablediffusionweb.com/favicon-32x32.png'
  },
  {
    id: 5,
    name: 'GitHub Copilot',
    description: 'AI pair programmer that assists developers in writing code.',
    category: 'Developer Tool',
    websiteUrl: 'https://github.com/copilot',
    iconUrl: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
  },
  {
    id: 6,
    name: 'RunwayML',
    description: 'Platform for artists and creators using AI for media synthesis.',
    category: 'Creative Suite',
    websiteUrl: 'https://app.runwayml.com/',
    iconUrl: 'https://cdn.sanity.io/images/fuvbjjlp/production/e653776a22a650dd89c3d5fcb8a8b41c09f18b05-1877x469.png'
  },
  {
    id: 7,
    name: 'KimiAI',
    description: 'Intelligent conversational AI with strong contextual understanding.',
    category: 'Language Model',
    websiteUrl: 'https://kimi.moonshot.cn/',
    iconUrl: 'https://kimi.moonshot.cn/apple-touch-icon.png'
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
    iconUrl: 'https://chat.qwen.ai/favicon.png'
  },
  {
    id: 11,
    name: 'V0',
    description: 'AI tool for generating UI designs and website components from text descriptions.',
    category: 'Design Tool',
    websiteUrl: 'https://v0.dev/',
    iconUrl: 'https://v0.dev/favicon.ico'
  },
  {
    id: 12,
    name: 'Grok',
    description: 'xAI\'s conversational model with real-time data access and unique personality.',
    category: 'Language Model',
    websiteUrl: 'https://grok.com/',
    iconUrl: 'https://grok.com/favicon.ico'
  },
  {
    id: 13,
    name: 'Le Chat - Mistral AI',
    description: 'French AI startup offering powerful open models with competitive performance.',
    category: 'Language Model',
    websiteUrl: 'https://chat.mistral.ai/',
    iconUrl: 'https://chat.mistral.ai/favicon-32x32.png'
  },
  {
    id: 14,
    name: 'Meta AI',
    description: 'Meta\'s AI assistant integrated across Meta apps and services.',
    category: 'Language Model',
    websiteUrl: 'https://www.meta.ai/',
    iconUrl: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/34InQ1xprbA.svg'
  },
  {
    id: 15,
    name: 'Meta AI Studio',
    description: 'Platform for creating AI-generated images on Instagram.',
    category: 'Image Generation',
    websiteUrl: 'https://aistudio.instagram.com/',
    iconUrl: 'https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico'
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
    iconUrl: 'https://bolt.new/favicon.ico'
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
    iconUrl: 'https://ideogram.ai/favicon.ico'
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