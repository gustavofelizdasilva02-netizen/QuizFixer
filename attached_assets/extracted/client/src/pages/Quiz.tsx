import { useState, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';

type WelcomeOption = {
  icon: string;
  title: string;
  subtitle: string;
};

type Question = {
  id: number;
  progress?: number;
  title: string;
  subtitle?: string | null;
  type?: string;
  result?: string;
  options?: string[] | WelcomeOption[];
  info?: Array<{ text: string; selectable: boolean }>;
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const containerVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
};

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});

  const trackEvent = async (event: string, data: any) => {
    try {
      const trackingUrl = window.location.hostname === 'localhost' || window.location.port === '5000'
        ? '/api/track'
        : '/tracking.php';
      
      await fetch(trackingUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, data, step })
      });
    } catch (error) {
      console.log('Tracking error:', error);
    }
  };

  useEffect(() => {
    trackEvent('page_view', { step });
  }, [step]);

  const questions: Question[] = [
    {
      id: 0,
      type: "welcome",
      title: "Me responda uma coisa...",
      subtitle: "Você gostaria de economizar até 70% na compra de perfumes importados originais para o seu uso próprio, ter acesso facilitado as fontes dos donos lojas de shopping e descobrir um jeito simples de ainda fazer Renda extra?",
      options: [
        {
          icon: "💰",
          title: "70% de Economia",
          subtitle: "Economize até 70% em perfumes importados originais"
        },
        {
          icon: "💸",
          title: "Renda Extra",
          subtitle: "Jeito simples de fazer renda extra com perfumes"
        }
      ] as WelcomeOption[]
    },
    {
      id: 1,
      progress: 20,
      title: "De quem você comprava perfumes importados até este momento?",
      options: [
        "Sites e lojas no Brasil",
        "Comprava do Paraguai",
        "De um conhecido"
      ]
    },
    {
      id: 2,
      progress: 40,
      title: "Você já cogitou revender perfumes importados e viver disso ou tá satisfeito como consumidor, mas tem interesse de comprar mais barato?",
      options: [
        "Já cogitei revender perfumes importados",
        "Pretendo apenas economizar em minhas compras pessoais"
      ]
    },
    {
      id: 3,
      progress: 60,
      title: "O Naipers Club vai te oferecer:",
      subtitle: null,
      options: [
        "até 70% de economia",
        "possibilidade de fazer até R$ 1.000,00 de renda extra",
        "Cota de compra de 5 perfumes por mês sem exigência de pedido mínimo",
        "Acesso a área de membros com aulas caso pense em algum momento começar a revender"
      ],
      info: [
        { text: "Maravilha, parece ser muito bom!", selectable: true },
        { text: "Me prova que vale a pena", selectable: true }
      ]
    },
    {
      id: 4,
      progress: 80,
      title: "Veja o que os membros do clube estão falando do NAIPER'S CLUB",
      type: "testimonials",
      options: [
        "Também quero receber meus códigos e crescer o grande movimento!",
        "Vou deixar essa oportunidade..."
      ]
    },
    {
      id: 5,
      progress: 100,
      type: "result",
      title: "Com base nas suas respostas, sua chance de poupar muita grana em suas compras pessoais e lucrar com perfumes importados é:",
      result: "ALTA!",
      subtitle: "Você está literalmente pront(a) para dar o próximo passo e se tornar um consumidor inteligente e destravar mais uma fonte de renda."
    }
  ];

  const currentQuestion = questions[step];

  const handleAnswer = async (answer: any) => {
    setAnswers({ ...answers, [step]: answer });
    
    await trackEvent('button_click', { answer, step });
    
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setStep(step + 1), 1000);
    }
  };

  if (step >= questions.length) {
    return (
      <AnimatePresence mode="wait">
        <motion.div 
          key="final"
          className="min-h-screen bg-black text-white flex items-center justify-center p-6"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div 
            className="max-w-4xl w-full"
            variants={containerVariants}
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Veja a Transformação
              </h1>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-6 mb-12" variants={itemVariants}>
              <motion.div 
                className="bg-red-950/20 border-2 border-red-900/30 rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-900/40 flex items-center justify-center text-2xl">
                    ✕
                  </div>
                  <h3 className="text-2xl font-bold text-red-400">Antes</h3>
                </div>
                <ul className="space-y-4 text-white/80">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Gastava em lojas caríssimas</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Pagava preços absurdos</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-green-950/20 border-2 border-green-700/30 rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-700/40 flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-green-400">Depois</h3>
                </div>
                <ul className="space-y-4 text-white/80">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Economizo economizando até 70%</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Acesso direto da fábrica direto do fornecedor</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div className="text-center space-y-6" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 rounded-xl"
                  data-testid="button-purchase"
                  onClick={() => trackEvent('purchase_click', { step: 7 })}
                >
                  COMPRAR AGORA POR 12x DE R$ 52,37
                </Button>
              </motion.div>

              <div className="text-sm text-white/60">
                <p className="mb-4 font-semibold">O que você vai receber:</p>
                <ul className="space-y-2 max-w-2xl mx-auto text-left">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Acesso Imediato a área de membros, com aulas práticas e objetivas que vão te ensinar a atrair clientes...</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Acesso Imediato a Comunidade no WhatsApp para ter acesso a demais alunos...</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Entre em um Acervo de Zapzap já Toda as técnicas, mensagens prontas para...</span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-6">
                <p className="text-2xl font-bold text-primary mb-2">Naiper's Club</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 rounded-xl"
                    data-testid="button-purchase-bottom"
                    onClick={() => trackEvent('purchase_click', { step: 7 })}
                  >
                    COMPRAR AGORA POR 12x DE R$ 52,37
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (currentQuestion.type === "welcome") {
    const welcomeOptions = currentQuestion.options as WelcomeOption[];
    return (
      <AnimatePresence mode="wait">
        <motion.div 
          key="welcome"
          className="min-h-screen bg-black text-white flex items-center justify-center p-6"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div 
            className="max-w-3xl w-full"
            variants={containerVariants}
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <img 
                src="/logo-naipers.png" 
                alt="Naiper's Club" 
                className="w-64 md:w-80 mx-auto mb-6"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {currentQuestion.title}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {currentQuestion.subtitle}
              </p>
              <motion.p 
                className="text-sm text-primary font-semibold animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                👇 Escolha uma opção abaixo para continuar 👇
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {welcomeOptions.map((option, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleAnswer(option.title)}
                  className="bg-white/5 border-2 border-white/10 hover:border-primary/50 hover:bg-white/10 rounded-2xl p-8 text-left transition-all duration-200"
                  data-testid={`button-option-${idx}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-5xl mb-4">{option.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {option.title}
                  </h3>
                  <p className="text-white/70">
                    {option.subtitle}
                  </p>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (currentQuestion.type === "result") {
    return (
      <AnimatePresence mode="wait">
        <motion.div 
          key="result"
          className="min-h-screen bg-black text-white flex items-center justify-center p-6"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div 
            className="max-w-2xl w-full"
            variants={containerVariants}
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-white/60">Pergunta 5 de 5</span>
                <span className="text-sm font-semibold text-primary">{currentQuestion.progress}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-yellow-500"
                  initial={{ width: "80%" }}
                  animate={{ width: `${currentQuestion.progress}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>

            <motion.div className="text-center space-y-8" variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold">
                {currentQuestion.title}
              </h2>

              <motion.div 
                className="relative inline-block"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <div className="w-48 h-48 mx-auto rounded-full border-8 border-primary flex items-center justify-center bg-primary/10">
                  <span className="text-5xl font-black text-primary">100%</span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-6xl md:text-7xl font-black text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {currentQuestion.result}
              </motion.h1>

              <motion.p 
                className="text-lg text-white/80 max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {currentQuestion.subtitle}
              </motion.p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleAnswer("continue")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-4 rounded-xl mt-8"
                  data-testid="button-continue"
                >
                  Avançar
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (currentQuestion.type === "testimonials") {
    const stringOptions = currentQuestion.options as string[];
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const testimonials = [
      '/testimonials/depoimento-1.jpg',
      '/testimonials/depoimento-2.jpg',
      '/testimonials/depoimento-3.jpg',
      '/testimonials/depoimento-4.jpg',
      '/testimonials/depoimento-5.jpg',
      '/testimonials/depoimento-6.jpg',
      '/testimonials/depoimento-7.jpg',
      '/testimonials/depoimento-8.jpg',
    ];

    useEffect(() => {
      if (!emblaApi) return;
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }, [emblaApi]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
      <AnimatePresence mode="wait">
        <motion.div 
          key="testimonials"
          className="min-h-screen bg-black text-white flex items-center justify-center p-6"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div 
            className="max-w-4xl w-full"
            variants={containerVariants}
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="text-center mb-8">
                <img 
                  src="/logo-naipers.png" 
                  alt="Naiper's Club" 
                  className="w-64 md:w-80 mx-auto mb-6"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-white/60">Pergunta 4 de 5</span>
                <span className="text-sm font-semibold text-primary">{currentQuestion.progress}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-yellow-500"
                  initial={{ width: "60%" }}
                  animate={{ width: `${currentQuestion.progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-center mb-8"
              variants={itemVariants}
            >
              {currentQuestion.title}
            </motion.h2>

            <motion.div 
              className="mb-12 relative"
              variants={itemVariants}
            >
              <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                      <div className="relative aspect-[9/16] max-h-[500px] mx-auto rounded-xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                        <img
                          src={testimonial}
                          alt={`Depoimento ${index + 1}`}
                          className="w-full h-full object-contain bg-white/5"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 z-10"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={scrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 z-10"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <p className="text-center text-sm text-white/60 mt-4">
                {selectedIndex + 1} de {testimonials.length} depoimentos
              </p>
            </motion.div>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {stringOptions.map((option, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl transition-all duration-200 flex items-center gap-3"
                  data-testid={`button-option-${idx}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-left">{option}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  const stringOptions = currentQuestion.options as string[];

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={`question-${currentQuestion.id}`}
        className="min-h-screen bg-black text-white flex items-center justify-center p-6"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div 
          className="max-w-2xl w-full"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <img 
              src="/logo-naipers.png" 
              alt="Naiper's Club" 
              className="w-64 md:w-80 mx-auto mb-6"
            />
          </motion.div>

          <motion.div className="mb-8" variants={itemVariants}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-white/60">Pergunta {currentQuestion.id} de 5</span>
              <span className="text-sm font-semibold text-primary">{currentQuestion.progress}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-yellow-500"
                initial={{ width: `${(currentQuestion.progress || 0) - 20}%` }}
                animate={{ width: `${currentQuestion.progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            {currentQuestion.title}
          </motion.h2>

          <motion.div 
            className="space-y-4 mb-8"
            variants={containerVariants}
          >
            {currentQuestion.id === 3 ? (
              <>
                {stringOptions.map((option, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/5 border-2 border-white/20 rounded-xl px-6 py-4 flex items-center gap-3"
                    data-testid={`info-${idx}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, borderColor: "rgba(255, 215, 0, 0.3)" }}
                  >
                    <div className="w-6 h-6 rounded-full bg-black border-2 border-white/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90">{option}</span>
                  </motion.div>
                ))}
                
                <div className="mt-8 space-y-4">
                  {currentQuestion.info?.map((item, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleAnswer(item.text)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl transition-all duration-200 flex items-center gap-3"
                      data-testid={`button-option-${idx}`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-left">{item.text}</span>
                    </motion.button>
                  ))}
                </div>
              </>
            ) : (
              stringOptions.map((option, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl transition-all duration-200 flex items-center gap-3"
                  data-testid={`button-option-${idx}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-left">{option}</span>
                </motion.button>
              ))
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
