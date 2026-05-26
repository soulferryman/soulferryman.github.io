/**
 * ═══════════════════════════════════════════════════════════════
 *  Dong Jianyu (董建宇) — Personal Portfolio Interaction Engine
 *  Pure Vanilla ES6+ · No Frameworks · No Libraries
 * ═══════════════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ═══════════════════════════════════════════════════════════
   *  DATA LAYER — All embedded data at the top
   * ═══════════════════════════════════════════════════════════ */

  // ── Typing Effect Titles ──
  const titles = [
    '开源生态负责人',
    'DevRel Lead',
    '具身智能先行者',
    'Vibe Coder',
    'AI Ecosystem Builder'
  ];

  // ── Game Boy Cartridge Games ──
  const games = [
    {
      id: 'wukong',
      title: '黑神话：悟空',
      titleEn: 'Black Myth: Wukong',
      color: '#C0392B',
      rating: 5,
      review: '东方神话与魂系动作的完美融合。每一个 Boss 都是对中国传统文化的致敬，战斗系统优雅且深邃。',
      achievement: '白金通关 / 72变，变变惊艳'
    },
    {
      id: 'zelda-totk',
      title: '塞尔达传说：王国之泪',
      titleEn: 'Zelda: Tears of the Kingdom',
      color: '#27AE60',
      rating: 5,
      review: '打破物理常识的箱庭美学巅峰。究极手是任天堂"枯竭技术水平思考"的完美诠释——用最朴素的物理引擎创造无限可能。',
      achievement: '通关率100% / 创造力之神'
    },
    {
      id: 'sekiro',
      title: '只狼：影逝二度',
      titleEn: 'Sekiro: Shadows Die Twice',
      color: '#E74C3C',
      rating: 5,
      review: '攻防即是心流，弹刀的节奏感让每一次死亡都化为多巴胺的预支。宫崎英高对"难度即叙事"的哲学在此达到巅峰。',
      achievement: '已白金 / 剑圣一心，一刀未中'
    },
    {
      id: 'rdr2',
      title: '荒野大镖客：救赎2',
      titleEn: 'Red Dead Redemption 2',
      color: '#8B4513',
      rating: 5,
      review: '不是游戏，是一封写给美国西部黄金时代的散文诗。Arthur Morgan的救赎之路，是互动叙事的天花板。',
      achievement: '二周目 / 在夕阳中与马并肩'
    },
    {
      id: 'eldenring',
      title: '艾尔登法环',
      titleEn: 'Elden Ring',
      color: '#DAA520',
      rating: 5,
      review: '当宫崎英高遇上乔治·R·R·马丁，开放世界的黑暗幻想达到了前所未有的广度与深度。探索感无与伦比。',
      achievement: '全结局收集 / 癫火永不熄灭'
    },
    {
      id: 'zelda-botw',
      title: '塞尔达传说：旷野之息',
      titleEn: 'Zelda: Breath of the Wild',
      color: '#3498DB',
      rating: 5,
      review: '重新定义了开放世界的标杆。化学引擎让每一寸土地都充满可能性，任天堂用减法做出了加法永远无法企及的自由。',
      achievement: '通关率100% / 旷野的呼吸永存'
    }
  ];

  // ── Elijah-Bot Chat Knowledge Base ──
  const chatKB = [
    {
      question: '你对具身智能的未来怎么看？',
      answer: '具身智能是 AI 从"理解世界"到"改变世界"的关键跃迁。大语言模型给了机器人"大脑"，而具身智能赋予它"身体"。我在北京人形机器人创新中心亲眼见证了 TienKung 天工从实验室走向真实世界的全过程——当 107k 条真实轨迹数据集（RoboMIND）被开源的那一刻，我知道这个行业的拐点已经到来。'
    },
    {
      question: '推荐一款任天堂的必玩游戏！',
      answer: '必须是《塞尔达传说：旷野之息》！任天堂用"枯竭技术的水平思考"哲学，仅靠物理引擎和化学引擎的组合，就创造出了无限自由的箱庭世界。它教会我一个深刻的道理：最好的设计不是堆砌功能，而是用最少的规则创造最大的可能性。这和我做开源生态的理念一模一样——提供基础设施，让开发者自己去创造。'
    },
    {
      question: 'DevRel 的核心价值是什么？',
      answer: '很多人以为 DevRel 就是"搞社区活动"。但真正的 DevRel 是一座桥梁——连接技术产品与开发者生态。核心价值在于：1️⃣ 降低技术门槛（把复杂的 API 和框架变成开发者能快速上手的资产）；2️⃣ 构建信任（通过开源、透明、真诚的沟通赢得开发者心智）；3️⃣ 闭环商业化（FlyFish 从开源到百万级转化的实践证明，好的 DevRel 是能直接驱动营收的）。'
    },
    {
      question: '你的 Vibe Coding 工作流是什么？',
      answer: '我的 Vibe Coding 三件套：☕ 一杯意式浓缩打底，🎵 Lo-fi Hip Hop 或者任天堂 OST 循环播放，⌨️ HHKB 键盘的触发式反馈提供节奏感。然后打开 Cursor + Claude，用自然语言描述我想要的功能，AI 负责初稿，我负责审查、重构和注入灵魂。这就是为什么我说 Vibe Coding 不是"AI 替你写代码"——而是"人类的审美和判断力与 AI 的生产力形成共振"。'
    },
    {
      question: '聊聊你最喜欢的一段工作经历？',
      answer: '最让我热血沸腾的，是在北京人形机器人创新中心主导 RoboMIND 数据集开源的那段日子。600W+ 的资产分发量、从零搭建 GitHub 开源社区治理体系、联合清华和 CMU 的顶尖实验室推动产学研合作……每一天都像在参与一场"让机器人真正走进现实世界"的革命。而且我们的天工机器人还参加了 2026 年北京机器人马拉松——我负责的二次开发保障工作让我第一次感受到"自己写的代码在物理世界里奔跑"的震撼。'
    }
  ];

  // ── Radio Channels ──
  const radioChannels = [
    { name: 'Embodied AI', icon: '🤖', message: '2026年是具身智能产业化元年。RoboMIND 数据集下载量突破 600W+，天工机器人完成马拉松全程。' },
    { name: 'DevRel', icon: '🔗', message: '好的 DevRel 不是做活动，而是构建让开发者"爽"的基础设施。开源透明是赢得信任的唯一捷径。' },
    { name: 'Open Source', icon: '🌱', message: 'FlyFish 从 0 到 2000+ Stars 的秘诀：用社区的力量解决真实的痛点，让每一个贡献者都有获得感。' },
    { name: 'Retro Gaming', icon: '🎮', message: '任天堂教会我：最好的创新不是技术领先，而是"枯竭技术的水平思考"——用有限的资源创造无限的乐趣。' }
  ];

  // ── Workspace Gear ──
  const gearItems = [
    { id: 'camera', name: 'Leica M6', emoji: '📷', desc: '机械时代的巅峰工艺。取景器里的黄斑对焦，教会了我如何在信息过载的世界里保持绝对专注。' },
    { id: 'keyboard', name: 'Olivetti Lettera 32', emoji: '⌨️', desc: 'Cormac McCarthy 用它敲出了《路》，我把它摆在桌上提醒自己：最好的代码和文字一样，都需要克制与节奏感。' },
    { id: 'vinyl', name: 'Technics SL-1200', emoji: '🎵', desc: '模拟音频的温暖是数字计算无法完全替代的。写核心逻辑时，需要配上一点老派的 Lo-fi 噪音。' },
    { id: 'mac', name: 'Macintosh 128K', emoji: '🖥️', desc: '"1984 will not be like 1984." 科技应该赋予人类力量，而不是让人类成为机器的附庸。这是我做产品的底色。' },
    { id: 'knife', name: 'Chris Reeve Sebenza', emoji: '🔪', desc: '以极简设计和巅峰加工精度著称的折刀。它提醒我写出的代码也应如这把刀一般：结构简练、功能纯粹且经久耐用。' },
    { id: 'odyssey', name: 'Magnavox Odyssey', emoji: '🕹️', desc: '世界第一款家用游戏机。重温电子游戏的原点，时刻保持对互动体验和游戏化设计的探索与敬畏。' },
    { id: 'ps1', name: 'Sony PlayStation', emoji: '🎮', desc: '将 3D 游戏推向大众的传奇主机。在那个多边形匮乏的时代，游戏制作者的想象力填补了机能的不足。' },
    { id: 'iphone', name: 'Apple iPhone (2007)', emoji: '📱', desc: '重新定义交互范式的设备。每当遇到瓶颈时，我都会回想起那句 "Apple reinvents the phone"，寻找打破常规的勇气。' }
  ];

  // ── Soul Stats ──
  const soulStats = [
    { label: '茶多酚饱和度', value: 85 },
    { label: 'Vibe Coding 速度', value: 92 },
    { label: '任式游戏能量', value: 99 },
    { label: '机器人好感度', value: 90 },
    { label: '开源治理力', value: 88 }
  ];

  // ── Radar Chart Data ──
  const radarData = {
    labels: ['DevRel', '高校合作', '开源治理', '内容运营', '商业化', '技术理解'],
    values: [90, 85, 92, 88, 80, 75]
  };

  // ── Project Filter Categories ──
  const filterCategories = ['全部', '具身智能', '智能运维', '工具'];

  /* ═══════════════════════════════════════════════════════════
   *  UTILITY HELPERS
   * ═══════════════════════════════════════════════════════════ */

  /** Safely query a single element */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  /** Safely query multiple elements */
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  /** Detect touch-primary device */
  const isTouchDevice = () => matchMedia('(pointer: coarse)').matches;
  /** Clamp a number between min and max */
  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
  /** Simple delay promise */
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  /* ═══════════════════════════════════════════════════════════
   *  1. TYPING EFFECT — Hero Subtitle
   * ═══════════════════════════════════════════════════════════ */

  const initTypingEffect = () => {
    const el = $('#typing-text');
    if (!el) return;

    let titleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId = null;

    const TYPING_SPEED = 100;
    const DELETE_SPEED = 50;
    const PAUSE_DURATION = 2000;

    const tick = () => {
      const currentTitle = titles[titleIdx];

      if (!isDeleting) {
        // Typing forward
        charIdx++;
        el.textContent = currentTitle.slice(0, charIdx);

        if (charIdx === currentTitle.length) {
          // Finished typing — pause then start deleting
          isDeleting = true;
          timeoutId = setTimeout(tick, PAUSE_DURATION);
          return;
        }
        timeoutId = setTimeout(tick, TYPING_SPEED);
      } else {
        // Deleting backward
        charIdx--;
        el.textContent = currentTitle.slice(0, charIdx);

        if (charIdx === 0) {
          // Finished deleting — move to next title
          isDeleting = false;
          titleIdx = (titleIdx + 1) % titles.length;
          timeoutId = setTimeout(tick, TYPING_SPEED);
          return;
        }
        timeoutId = setTimeout(tick, DELETE_SPEED);
      }
    };

    // Ensure cursor blink — the CSS should handle the blinking `|` via
    // a pseudo-element with class or the element itself having a `data-cursor`
    el.setAttribute('data-cursor', '|');
    tick();
  };

  /* ═══════════════════════════════════════════════════════════
   *  2. 3D CARD TILT EFFECT — Project Cards
   * ═══════════════════════════════════════════════════════════ */

  const initCardTilt = () => {
    if (isTouchDevice()) return; // Disable on touch devices

    const MAX_TILT = 8;

    // Event delegation on document for all project cards
    const handleMouseMove = (e) => {
      const card = e.target.closest('.project-card');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize mouse position to -1..1
      const normX = (e.clientX - centerX) / (rect.width / 2);
      const normY = (e.clientY - centerY) / (rect.height / 2);

      const rotateY = clamp(normX * MAX_TILT, -MAX_TILT, MAX_TILT);
      const rotateX = clamp(-normY * MAX_TILT, -MAX_TILT, MAX_TILT);

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transition = 'transform 0.1s ease-out';

      // Glare / shine overlay
      let glare = card.querySelector('.card-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'card-glare';
        Object.assign(glare.style, {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          borderRadius: 'inherit',
          zIndex: '10',
          opacity: '0',
          transition: 'opacity 0.3s ease'
        });
        card.style.position = card.style.position || 'relative';
        card.style.overflow = 'hidden';
        card.appendChild(glare);
      }

      // Position the glare effect relative to cursor
      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
      glare.style.opacity = '1';
    };

    const handleMouseLeave = (e) => {
      const card = e.target.closest('.project-card');
      if (!card) return;

      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      card.style.transition = 'transform 0.5s ease-out';

      const glare = card.querySelector('.card-glare');
      if (glare) {
        glare.style.opacity = '0';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Need to detect mouseleave per card — use delegation with pointerleave
    $$('.project-card').forEach(card => {
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.transition = 'transform 0.5s ease-out';
        const glare = card.querySelector('.card-glare');
        if (glare) glare.style.opacity = '0';
      });
    });
  };

  /* ═══════════════════════════════════════════════════════════
   *  3. GAME BOY CARTRIDGE STATION
   * ═══════════════════════════════════════════════════════════ */

  const initGameStation = () => {
    const rack = $('.gamestation__rack');
    const screen = $('.gamestation__screen');
    const slot = $('.gamestation__slot');
    if (!rack) return;

    let currentCartridge = null;
    let isAnimating = false;
    let audioCtx = null;

    // ── Build cartridge elements if they don't exist ──
    if (!rack.children.length) {
      games.forEach(game => {
        const cartridge = document.createElement('div');
        cartridge.className = 'gamestation__cartridge';
        cartridge.dataset.gameId = game.id;
        cartridge.setAttribute('role', 'button');
        cartridge.setAttribute('tabindex', '0');
        cartridge.setAttribute('aria-label', `Insert ${game.title}`);
        cartridge.style.setProperty('--cart-color', game.color);
        cartridge.innerHTML = `
          <div class="cartridge__body" style="background: ${game.color}">
            <div class="cartridge__label">
              <span class="cartridge__title">${game.title}</span>
              <span class="cartridge__title-en">${game.titleEn}</span>
            </div>
            <div class="cartridge__notch"></div>
          </div>
        `;
        rack.appendChild(cartridge);
      });
    }

    // ── Sound Generation (8-bit click via Web Audio API) ──
    function playInsertSound() {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.setValueAtTime(600, ctx.currentTime + 0.05);
        osc.frequency.setValueAtTime(400, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.15);
      } catch (e) {
        // Audio not supported — fail silently
      }
    }

    // ── Play eject sound (reverse beep) ──
    function playEjectSound() {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.setValueAtTime(600, ctx.currentTime + 0.05);
        osc.frequency.setValueAtTime(800, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
      } catch (e) {
        // fail silently
      }
    }

    // ── Generate star rating HTML ──
    function renderStars(count) {
      return '★'.repeat(count) + '☆'.repeat(5 - count);
    }

    // ── Typewriter effect for review text ──
    async function typewriterReview(element, text, speed = 30) {
      element.textContent = '';
      for (let i = 0; i < text.length; i++) {
        element.textContent += text[i];
        await delay(speed);
      }
    }

    // ── Screen flicker effect ──
    async function flickerScreen() {
      if (!screen) return;
      screen.classList.add('gamestation__screen--flicker');
      await delay(300);
      screen.classList.remove('gamestation__screen--flicker');
    }

    // ── Display game info on screen ──
    async function displayGame(game) {
      if (!screen) return;

      // Flicker transition
      await flickerScreen();

      // Clear and build screen content
      screen.innerHTML = '';
      screen.classList.add('gamestation__screen--active');

      const content = document.createElement('div');
      content.className = 'gamestation__screen-content';
      content.innerHTML = `
        <h3 class="screen__title">${game.title}</h3>
        <p class="screen__title-en">${game.titleEn}</p>
        <div class="screen__rating">${renderStars(game.rating)}</div>
        <p class="screen__review"></p>
        <div class="screen__achievement">
          <span class="achievement__badge">🏆</span>
          <span class="achievement__text">${game.achievement}</span>
        </div>
      `;

      screen.appendChild(content);

      // Typewriter effect for the review
      const reviewEl = content.querySelector('.screen__review');
      await typewriterReview(reviewEl, game.review);
    }

    // ── Clear screen ──
    function clearScreen() {
      if (!screen) return;
      screen.classList.remove('gamestation__screen--active');
      screen.innerHTML = `
        <div class="gamestation__screen-idle">
          <span class="screen__prompt">▶ SELECT A CARTRIDGE</span>
        </div>
      `;
    }

    // ── Insert cartridge animation ──
    async function insertCartridge(cartridgeEl, game) {
      if (isAnimating) return;
      isAnimating = true;

      // If a cartridge is already inserted, eject it first
      if (currentCartridge && currentCartridge !== cartridgeEl) {
        await ejectCartridge(currentCartridge);
      }

      // Animate insertion
      cartridgeEl.classList.add('gamestation__cartridge--inserting');
      playInsertSound();

      await delay(400);

      cartridgeEl.classList.remove('gamestation__cartridge--inserting');
      cartridgeEl.classList.add('gamestation__cartridge--inserted');
      currentCartridge = cartridgeEl;

      // Display game on screen
      await displayGame(game);

      isAnimating = false;
    }

    // ── Eject cartridge animation ──
    async function ejectCartridge(cartridgeEl) {
      cartridgeEl.classList.add('gamestation__cartridge--ejecting');
      playEjectSound();

      await delay(300);

      cartridgeEl.classList.remove('gamestation__cartridge--inserted', 'gamestation__cartridge--ejecting');
      currentCartridge = null;
      clearScreen();
    }

    // ── Event delegation for cartridge clicks ──
    rack.addEventListener('click', (e) => {
      const cartridgeEl = e.target.closest('.gamestation__cartridge');
      if (!cartridgeEl) return;

      const gameId = cartridgeEl.dataset.gameId;
      const game = games.find(g => g.id === gameId);
      if (!game) return;

      // If clicking the already-inserted cartridge, eject it
      if (cartridgeEl.classList.contains('gamestation__cartridge--inserted')) {
        ejectCartridge(cartridgeEl);
        return;
      }

      insertCartridge(cartridgeEl, game);
    });

    // ── Keyboard accessibility ──
    rack.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const cartridgeEl = e.target.closest('.gamestation__cartridge');
        if (cartridgeEl) {
          e.preventDefault();
          cartridgeEl.click();
        }
      }
    });

    // Initialize idle screen
    clearScreen();
  };

  /* ═══════════════════════════════════════════════════════════
   *  4. ELIJAH-BOT CHAT WIDGET
   * ═══════════════════════════════════════════════════════════ */

  const initChatWidget = () => {
    // Use the existing HTML chat widget
    const chatContainer = $('#chat-widget');
    if (!chatContainer) return;

    const toggleBtn = $('#chat-toggle');
    const chatWindow = $('#chat-window');
    const closeBtn = $('#chat-close');
    const messagesArea = $('#chat-messages');
    const chipsArea = $('#chat-presets');

    if (!toggleBtn || !chatWindow || !messagesArea || !chipsArea) return;

    let isOpen = false;
    let isBotTyping = false;

    // ── Create message bubble ──
    function createMessage(text, sender = 'bot') {
      const bubble = document.createElement('div');
      bubble.className = `chat-widget__message chat-widget__message--${sender}`;
      bubble.textContent = text;
      return bubble;
    }

    // ── Create typing indicator ──
    function createTypingIndicator() {
      const indicator = document.createElement('div');
      indicator.className = 'chat-widget__message chat-widget__message--bot chat-widget__typing';
      indicator.innerHTML = `
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      `;
      return indicator;
    }

    // ── Scroll messages to bottom ──
    function scrollToBottom() {
      messagesArea.scrollTop = messagesArea.scrollHeight;
    }

    // ── Typewriter for bot response ──
    async function typeBotResponse(text) {
      const bubble = createMessage('', 'bot');
      messagesArea.appendChild(bubble);
      scrollToBottom();

      for (let i = 0; i < text.length; i++) {
        bubble.textContent += text[i];
        if (i % 3 === 0) scrollToBottom();
        await delay(30);
      }
      scrollToBottom();
    }

    // ── Handle question click ──
    async function handleQuestion(qa) {
      if (isBotTyping) return;
      isBotTyping = true;

      const userMsg = createMessage(qa.question, 'user');
      messagesArea.appendChild(userMsg);
      scrollToBottom();

      $$('.chat-widget__chip', chipsArea).forEach(chip => {
        chip.classList.add('chat-widget__chip--disabled');
      });

      const typingEl = createTypingIndicator();
      messagesArea.appendChild(typingEl);
      scrollToBottom();

      await delay(1000 + Math.random() * 1000);
      typingEl.remove();
      await typeBotResponse(qa.answer);

      $$('.chat-widget__chip', chipsArea).forEach(chip => {
        chip.classList.remove('chat-widget__chip--disabled');
      });

      isBotTyping = false;
    }

    // ── Render preset question chips ──
    function renderChips() {
      chipsArea.innerHTML = '';
      chatKB.forEach((qa) => {
        const chip = document.createElement('button');
        chip.className = 'chat-widget__chip';
        chip.textContent = qa.question;
        chip.addEventListener('click', () => handleQuestion(qa));
        chipsArea.appendChild(chip);
      });
    }

    // ── Toggle chat window ──
    function openChat() {
      isOpen = true;
      chatWindow.hidden = false;
      if (messagesArea.children.length === 0) {
        const welcome = createMessage('Hey! 👋 我是建宇的 AI 分身。点击下面的问题来了解我吧！', 'bot');
        messagesArea.appendChild(welcome);
        renderChips();
      }
    }
    function closeChat() {
      isOpen = false;
      chatWindow.hidden = true;
    }

    toggleBtn.addEventListener('click', () => {
      if (isOpen) closeChat(); else openChat();
    });
    if (closeBtn) closeBtn.addEventListener('click', closeChat);
  };

  /* ═══════════════════════════════════════════════════════════
   *  5. TERMINAL EMAIL COPY + TOAST NOTIFICATION
   * ═══════════════════════════════════════════════════════════ */

  const initTerminalCopy = () => {
    // ── Toast notification system ──
    function showToast(message, duration = 2500) {
      // Remove existing toast if any
      const existing = $('.toast-notification');
      if (existing) existing.remove();

      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.textContent = message;
      Object.assign(toast.style, {
        position: 'fixed',
        top: '-60px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(99, 102, 241, 0.95)',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        zIndex: '10000',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
        transition: 'top 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        whiteSpace: 'nowrap'
      });

      document.body.appendChild(toast);

      // Slide in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          toast.style.top = '24px';
        });
      });

      // Auto dismiss
      setTimeout(() => {
        toast.style.top = '-60px';
        setTimeout(() => toast.remove(), 400);
      }, duration);
    }

    // ── Copy handler via event delegation ──
    document.addEventListener('click', (e) => {
      const copyTarget = e.target.closest('[data-copy]') ||
                         e.target.closest('.terminal__line--copyable') ||
                         e.target.closest('.contact__copy-btn');

      if (!copyTarget) return;

      const email = copyTarget.dataset.copy ||
                    copyTarget.dataset.email ||
                    copyTarget.textContent.trim().replace(/^\$\s*/, '');

      if (!email) return;

      navigator.clipboard.writeText(email).then(() => {
        showToast('Copied to clipboard! 🚀');
      }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showToast('Copied to clipboard! 🚀');
        } catch (err) {
          showToast('Copy failed — please copy manually');
        }
        textarea.remove();
      });
    });
  };

  /* ═══════════════════════════════════════════════════════════
   *  6. SCROLL REVEAL ANIMATIONS
   * ═══════════════════════════════════════════════════════════ */

  const initScrollReveal = () => {
    const revealElements = $$('.reveal, section, .project-card, .career__item, .workspace__item, .stats__bar, .about__card');

    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');

          // Stagger children
          const children = entry.target.querySelectorAll('.reveal-child, .stagger');
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.1}s`;
            child.classList.add('revealed');
          });

          // Unobserve after reveal (animate once)
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  };

  /* ═══════════════════════════════════════════════════════════
   *  7. RADIO COMPONENT — Channel Switching
   * ═══════════════════════════════════════════════════════════ */

  const initRadio = () => {
    const radioEl = $('.radio') || $('.hero__radio');
    if (!radioEl) return;

    const screenEl = $('.radio__screen', radioEl) || $('.radio__display', radioEl);
    const knobEl = $('.radio__knob', radioEl);
    const channelBtns = $$('.radio__channel-btn', radioEl);
    const channelName = $('.radio__channel-name', radioEl);

    let currentChannel = 0;
    let knobRotation = 0;

    function switchChannel(index) {
      currentChannel = index % radioChannels.length;
      const channel = radioChannels[currentChannel];

      // Update knob rotation
      knobRotation = currentChannel * 90; // 90 degrees per channel
      if (knobEl) {
        knobEl.style.transform = `rotate(${knobRotation}deg)`;
      }

      // Fade out -> update -> fade in
      if (screenEl) {
        screenEl.classList.add('radio__screen--fading');
        setTimeout(() => {
          screenEl.innerHTML = `
            <span class="radio__icon">${channel.icon}</span>
            <p class="radio__message">${channel.message}</p>
          `;
          screenEl.classList.remove('radio__screen--fading');
        }, 300);
      }

      // Update channel name
      if (channelName) {
        channelName.textContent = `${channel.icon} ${channel.name}`;
      }

      // Update active state on channel buttons
      channelBtns.forEach((btn, i) => {
        btn.classList.toggle('radio__channel-btn--active', i === currentChannel);
      });
    }

    // ── Knob click: cycle to next ──
    if (knobEl) {
      knobEl.addEventListener('click', () => {
        switchChannel(currentChannel + 1);
      });
      knobEl.style.cursor = 'pointer';
      knobEl.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }

    // ── Channel buttons ──
    channelBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => switchChannel(i));
    });

    // Initialize first channel
    switchChannel(0);
  };

  /* ═══════════════════════════════════════════════════════════
   *  8. PROJECT CATEGORY FILTER
   * ═══════════════════════════════════════════════════════════ */

  const initProjectFilter = () => {
    const filterContainer = $('#project-filters');
    const projectCards = $$('.project-card');

    if (!filterContainer || !projectCards.length) return;

    // ── Event delegation for filter buttons ──
    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.projects__filter');
      if (!btn) return;

      const filter = btn.dataset.filter;

      // Update active state
      $$('.projects__filter', filterContainer).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      projectCards.forEach(card => {
        const cardCategory = card.dataset.category || '';
        const shouldShow = filter === 'all' || cardCategory === filter;

        if (shouldShow) {
          card.style.display = '';
          card.classList.remove('project-card--hidden');
          requestAnimationFrame(() => {
            card.classList.add('project-card--visible');
          });
        } else {
          card.classList.remove('project-card--visible');
          card.classList.add('project-card--hidden');
          setTimeout(() => {
            if (card.classList.contains('project-card--hidden')) {
              card.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  };

  /* ═══════════════════════════════════════════════════════════
   *  9. CAREER TIMELINE EXPAND/COLLAPSE
   * ═══════════════════════════════════════════════════════════ */

  const initCareerTimeline = () => {
    // Event delegation
    document.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('.career__toggle, .timeline__toggle, [data-toggle="career"]');
      if (!toggleBtn) return;

      const item = toggleBtn.closest('.career__item, .timeline__item');
      if (!item) return;

      const details = item.querySelector('.career__details, .timeline__details');
      if (!details) return;

      const isExpanded = item.classList.contains('expanded');

      // Close all other items first (accordion behavior)
      $$('.career__item.expanded, .timeline__item.expanded').forEach(other => {
        if (other !== item) {
          other.classList.remove('expanded');
          const otherDetails = other.querySelector('.career__details, .timeline__details');
          if (otherDetails) {
            otherDetails.style.maxHeight = '0px';
          }
          const otherBtn = other.querySelector('.career__toggle, .timeline__toggle, [data-toggle="career"]');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isExpanded) {
        item.classList.remove('expanded');
        details.style.maxHeight = '0px';
        toggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('expanded');
        details.style.maxHeight = details.scrollHeight + 'px';
        toggleBtn.setAttribute('aria-expanded', 'true');

        // Update max-height after potential content changes
        const resizeObserver = new ResizeObserver(() => {
          if (item.classList.contains('expanded')) {
            details.style.maxHeight = details.scrollHeight + 'px';
          }
        });
        resizeObserver.observe(details);

        // Cleanup observer after transition
        setTimeout(() => resizeObserver.disconnect(), 1000);
      }
    });
  };

  /* ═══════════════════════════════════════════════════════════
   *  10. WORKSPACE GEAR POPOVERS
   * ═══════════════════════════════════════════════════════════ */

  const initGearPopovers = () => {
    const popoverEl = $('#workspace-popover');
    const popoverEmoji = $('#popover-emoji');
    const popoverName = $('#popover-name');
    const popoverDesc = $('#popover-desc');
    const popoverClose = $('#popover-close');
    let activeGearId = null;

    function showPopover(gear, anchorEl) {
      if (!popoverEl) return;
      popoverEmoji.textContent = gear.emoji;
      popoverName.textContent = gear.name;
      popoverDesc.textContent = gear.desc;
      popoverEl.hidden = false;

      // Position the popover near the clicked item
      const shelf = anchorEl.closest('.workspace__shelf');
      if (shelf) shelf.style.position = 'relative';

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        // Center below the grid on mobile
        popoverEl.style.position = 'relative';
        popoverEl.style.left = 'auto';
        popoverEl.style.top = 'auto';
        popoverEl.style.transform = 'none';
        popoverEl.style.marginTop = '1rem';
      } else {
        const anchorRect = anchorEl.getBoundingClientRect();
        const gap = 12;

        // Use fixed positioning — coordinates are relative to viewport
        popoverEl.style.position = 'fixed';
        popoverEl.style.marginTop = '0';

        // Measure popover height offscreen first
        popoverEl.style.left = '-9999px';
        popoverEl.style.top = '-9999px';
        popoverEl.style.transform = 'none';
        const popoverHeight = popoverEl.offsetHeight;
        const popoverWidth = popoverEl.offsetWidth;

        // Smart flip: check if enough space below
        const spaceBelow = window.innerHeight - anchorRect.bottom - gap;
        const flipUp = spaceBelow < popoverHeight;

        // Vertical position
        if (flipUp) {
          popoverEl.style.top = `${anchorRect.top - popoverHeight - gap}px`;
        } else {
          popoverEl.style.top = `${anchorRect.bottom + gap}px`;
        }

        // Horizontal: center on the anchor, clamp to viewport edges
        let leftPos = anchorRect.left + anchorRect.width / 2 - popoverWidth / 2;
        leftPos = Math.max(12, Math.min(leftPos, window.innerWidth - popoverWidth - 12));
        popoverEl.style.left = `${leftPos}px`;
        popoverEl.style.transform = 'none';
      }
      activeGearId = gear.id;
    }

    function hidePopover() {
      if (popoverEl) popoverEl.hidden = true;
      activeGearId = null;
    }

    // ── Event delegation ──
    document.addEventListener('click', (e) => {
      const gearEl = e.target.closest('.workspace__item[data-gear]');
      if (gearEl) {
        e.stopPropagation();
        const gearId = gearEl.dataset.gear;
        const gear = gearItems.find(g => g.id === gearId);
        if (!gear) return;

        if (activeGearId === gearId) { hidePopover(); return; }
        showPopover(gear, gearEl);
      } else if (!e.target.closest('.workspace__popover')) {
        hidePopover();
      }
    });

    if (popoverClose) popoverClose.addEventListener('click', hidePopover);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hidePopover(); });
  };

  /* ═══════════════════════════════════════════════════════════
   *  11. SOUL STATS — Animated Progress Bars on Scroll
   * ═══════════════════════════════════════════════════════════ */

  const initSoulStats = () => {
    const statsContainer = $('#soul-stats');
    if (!statsContainer) return;

    const fills = $$('.soul-stat__fill', statsContainer);
    if (!fills.length) return;

    // ── Animate bars when visible ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        fills.forEach((fill, i) => {
          const target = parseInt(fill.dataset.value || '0', 10);
          setTimeout(() => {
            fill.style.transition = 'width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            fill.style.width = `${target}%`;
          }, i * 150);
        });

        observer.unobserve(entry.target);
      });
    }, { threshold: 0.3 });

    observer.observe(statsContainer);
  };

  /* ═══════════════════════════════════════════════════════════
   *  12. RADAR CHART — Canvas Drawing
   * ═══════════════════════════════════════════════════════════ */

  const initRadarChart = () => {
    const canvas = $('canvas.radar-chart, #radar-chart, .radar-chart canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { labels, values } = radarData;
    const numAxes = labels.length;
    let animationProgress = 0;
    let animationFrame = null;
    let hasAnimated = false;

    // ── High DPI support ──
    function setupCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      return { width: rect.width, height: rect.height };
    }

    // ── Draw the radar chart ──
    function draw(progress = 1) {
      const { width, height } = setupCanvas();
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.35;

      ctx.clearRect(0, 0, width, height);

      const angleStep = (2 * Math.PI) / numAxes;
      const startAngle = -Math.PI / 2; // Start from top

      // ── Draw grid rings ──
      const rings = 5;
      for (let r = 1; r <= rings; r++) {
        const ringRadius = (radius / rings) * r;
        ctx.beginPath();
        for (let i = 0; i <= numAxes; i++) {
          const angle = startAngle + i * angleStep;
          const x = centerX + ringRadius * Math.cos(angle);
          const y = centerY + ringRadius * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // ── Draw axis lines ──
      for (let i = 0; i < numAxes; i++) {
        const angle = startAngle + i * angleStep;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + radius * Math.cos(angle),
          centerY + radius * Math.sin(angle)
        );
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // ── Draw data polygon (animated) ──
      ctx.beginPath();
      for (let i = 0; i <= numAxes; i++) {
        const idx = i % numAxes;
        const angle = startAngle + idx * angleStep;
        const value = (values[idx] / 100) * radius * progress;
        const x = centerX + value * Math.cos(angle);
        const y = centerY + value * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      // Fill — semi-transparent indigo
      ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
      ctx.fill();

      // Stroke — emerald outline
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // ── Draw data points ──
      for (let i = 0; i < numAxes; i++) {
        const angle = startAngle + i * angleStep;
        const value = (values[i] / 100) * radius * progress;
        const x = centerX + value * Math.cos(angle);
        const y = centerY + value * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(16, 185, 129, 1)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // ── Draw labels (white) ──
      ctx.font = '12px "SF Pro Display", system-ui, sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < numAxes; i++) {
        const angle = startAngle + i * angleStep;
        const labelRadius = radius + 24;
        const x = centerX + labelRadius * Math.cos(angle);
        const y = centerY + labelRadius * Math.sin(angle);

        // Adjust alignment based on position
        if (Math.abs(Math.cos(angle)) > 0.9) {
          ctx.textAlign = Math.cos(angle) > 0 ? 'left' : 'right';
        } else {
          ctx.textAlign = 'center';
        }

        ctx.fillText(labels[i], x, y);
      }
    }

    // ── Animate chart drawing ──
    function animate() {
      if (animationProgress >= 1) {
        animationProgress = 1;
        draw(1);
        return;
      }

      animationProgress += 0.02;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - animationProgress, 3);
      draw(eased);

      animationFrame = requestAnimationFrame(animate);
    }

    // ── Trigger animation on scroll into view ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animationProgress = 0;
          animate();
          observer.unobserve(canvas);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(canvas);

    // ── Redraw on resize ──
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (hasAnimated) draw(1);
      }, 200);
    });
  };

  /* ═══════════════════════════════════════════════════════════
   *  13. SMOOTH SCROLL NAVIGATION + Active Link Tracking
   * ═══════════════════════════════════════════════════════════ */

  const initSmoothScroll = () => {
    // ── Smooth scroll for anchor links ──
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update URL hash without jump
      history.pushState(null, '', targetId);
    });

    // ── Active nav link tracking on scroll ──
    const navLinks = $$('.nav__link, .navbar__link, nav a[href^="#"]');
    const sections = $$('section[id]');

    if (!navLinks.length || !sections.length) return;

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle(
              'nav__link--active',
              href === `#${id}`
            );
            // Also toggle generic active class
            link.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-80px 0px -60% 0px'
    });

    sections.forEach(section => navObserver.observe(section));

    // ── Nav background on scroll ──
    const nav = $('nav, .navbar, .nav');
    if (nav) {
      let lastScroll = 0;
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        nav.classList.toggle('nav--scrolled', scrollY > 50);
        nav.classList.toggle('nav--hidden', scrollY > lastScroll && scrollY > 200);
        nav.classList.toggle('nav--visible', scrollY <= lastScroll || scrollY <= 200);
        lastScroll = scrollY;
      }, { passive: true });
    }
  };

  /* ═══════════════════════════════════════════════════════════
   *  14. MOBILE HAMBURGER MENU
   * ═══════════════════════════════════════════════════════════ */

  const initMobileMenu = () => {
    const hamburger = $('.nav__hamburger, .hamburger, .menu-toggle, [data-menu-toggle]');
    const navEl = $('nav, .navbar, .nav');
    const navLinksContainer = $('.nav__links, .navbar__links, .nav-links');

    if (!hamburger) return;

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navEl?.classList.toggle('nav--open');
      hamburger.classList.toggle('hamburger--active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));

      // Lock body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // ── Close menu on link click ──
    if (navLinksContainer) {
      navLinksContainer.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
          navEl?.classList.remove('nav--open');
          hamburger.classList.remove('hamburger--active');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    }

    // ── Close menu on outside click ──
    document.addEventListener('click', (e) => {
      if (!navEl?.classList.contains('nav--open')) return;
      if (!e.target.closest('nav, .navbar, .nav')) {
        navEl.classList.remove('nav--open');
        hamburger.classList.remove('hamburger--active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // ── Close menu on Escape ──
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navEl?.classList.contains('nav--open')) {
        navEl.classList.remove('nav--open');
        hamburger.classList.remove('hamburger--active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  };

  /* ═══════════════════════════════════════════════════════════
   *  15. BLUEPRINT PARALLAX — 3D Parallax for Hero Blueprint Layer
   * ═══════════════════════════════════════════════════════════ */

  const initBlueprintParallax = () => {
    const hero = $('#hero');
    const blueprintLayer = $('#blueprint-layer');
    if (!hero || !blueprintLayer) return;

    let resizeTimer;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
      }, 200);
    });

    window.addEventListener('mousemove', (e) => {
      const mouseX = (e.clientX - windowWidth / 2) / (windowWidth / 2);
      const mouseY = (e.clientY - windowHeight / 2) / (windowHeight / 2);

      const moveX = mouseX * -12;
      const moveY = mouseY * -12;

      blueprintLayer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.03)`;
    }, { passive: true });
  };

  /* ═══════════════════════════════════════════════════════════
   *  INITIALIZATION — Boot all modules
   * ═══════════════════════════════════════════════════════════ */

  const boot = () => {
    // Core interactions
    initTypingEffect();
    initCardTilt();
    initGameStation();
    initChatWidget();
    initTerminalCopy();
    initScrollReveal();
    initRadio();
    initProjectFilter();
    initCareerTimeline();
    initGearPopovers();
    initSoulStats();
    initRadarChart();
    initSmoothScroll();
    initMobileMenu();
    initBlueprintParallax();

    // Log boot success
    console.log(
      '%c🚀 Portfolio Engine Booted',
      'color: #6366f1; font-weight: bold; font-size: 14px;'
    );
    console.log(
      '%c   Dong Jianyu · 董建宇 · All systems operational.',
      'color: #10b981; font-size: 11px;'
    );
  };

  boot();
});
