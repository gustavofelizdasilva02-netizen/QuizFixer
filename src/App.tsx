import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'

interface Question {
  type: 'welcome' | 'normal' | 'benefits' | 'testimonials' | 'result' | 'final'
  title: string
  options?: string[]
  info?: string[]
  items?: string[]
}

const questions: Question[] = [
  {
    type: 'welcome',
    title: 'Me responda uma coisa...',
    options: ['70% de Economia', 'Renda Extra']
  },
  {
    type: 'normal',
    title: 'De quem você comprava perfumes importados até este momento?',
    options: ['Sites e lojas no Brasil', 'Comprava do Paraguai', 'De um conhecido']
  },
  {
    type: 'normal',
    title: 'Você já cogitou revender perfumes importados para ter uma renda extra?',
    options: ['Sim, sempre quis', 'Nunca pensei nisso']
  },
  {
    type: 'benefits',
    title: 'O Naipers Club vai te oferecer:',
    items: [
      'até 70% de economia',
      'possibilidade de fazer até R$ 1.000,00 de renda extra',
      'Cota de compra de 5 perfumes por mês',
      'Acesso a área de membros'
    ],
    info: [
      'Maravilha, parece ser muito bom!',
      'Me prova que vale a pena'
    ]
  },
  {
    type: 'testimonials',
    title: 'Veja o que os membros do clube estão falando...',
    info: [
      'Também quero receber meus códigos e crescer o grande movimento!',
      'Vou deixar essa oportunidade passar...'
    ]
  },
  {
    type: 'result',
    title: 'Analisando suas respostas...',
    options: ['Avançar']
  }
]

const sendTracking = async (event: string, data: any, step: number) => {
  try {
    await fetch('/tracking.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event,
        data,
        step
      })
    })
  } catch (error) {
    console.error('Tracking error:', error)
  }
}

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showFinal, setShowFinal] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })

  const testimonials = [
    '/testimonials/depoimento-1.jpg',
    '/testimonials/depoimento-2.jpg',
    '/testimonials/depoimento-3.jpg',
    '/testimonials/depoimento-4.jpg',
    '/testimonials/depoimento-5.jpg',
    '/testimonials/depoimento-6.jpg',
    '/testimonials/depoimento-7.jpg',
    '/testimonials/depoimento-8.jpg',
  ]

  useEffect(() => {
    sendTracking('page_view', {}, currentStep)
  }, [currentStep])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  const handleAnswer = (answer: string) => {
    sendTracking('button_click', { answer }, currentStep)
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowFinal(true)
    }
  }

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  const progress = ((currentStep + 1) / questions.length) * 100

  if (showFinal) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl w-full text-center"
        >
          <img 
            src="/logo-naipers.png" 
            alt="Naiper's Club" 
            className="w-32 mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Compare e Decida
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-900/20 border-2 border-red-500 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400">ANTES</h3>
              <ul className="text-left space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span>Pagava até 70% a mais em perfumes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span>Sem oportunidade de renda extra</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span>Compras limitadas e caras</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 border-2 border-primary rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">DEPOIS</h3>
              <ul className="text-left space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <span>Até 70% de economia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <span>Até R$ 1.000,00 de renda extra/mês</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  <span>Acesso exclusivo ao clube</span>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => {
              sendTracking('purchase_click', {}, currentStep)
              window.location.href = 'https://pay.kiwify.com.br/exemplo'
            }}
            className="bg-primary text-black font-bold text-xl px-12 py-4 rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg shadow-primary/50"
          >
            COMPRAR AGORA
          </button>

          <p className="mt-6 text-gray-400">
            Vagas limitadas para novos membros
          </p>
        </motion.div>
      </div>
    )
  }

  const currentQuestion = questions[currentStep]

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="w-full px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/logo-naipers.png" 
            alt="Naiper's Club" 
            className="w-24 md:w-32 mx-auto mb-6"
          />
          
          <div className="w-full bg-gray-800 rounded-full h-2 mb-8">
            <motion.div
              className="bg-primary h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl w-full"
          >
            {currentQuestion.type === 'testimonials' ? (
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                  {currentQuestion.title}
                </h2>

                <div className="relative">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                      {testimonials.map((img, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                          <img
                            src={img}
                            alt={`Depoimento ${index + 1}`}
                            className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                  >
                    ←
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                  >
                    →
                  </button>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => emblaApi?.scrollTo(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === selectedIndex ? 'bg-primary w-8' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-center text-gray-400 mt-4">
                  {selectedIndex + 1} de {testimonials.length} depoimentos
                </p>

                <div className="space-y-4 mt-8">
                  {currentQuestion.info?.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option)}
                      className={`w-full p-4 rounded-lg font-semibold text-lg transition-all ${
                        index === 0
                          ? 'bg-primary text-black hover:bg-yellow-400'
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : currentQuestion.type === 'result' ? (
              <div className="text-center space-y-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
                    100% ALTA!
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Suas respostas mostram que você está pronto para o Naiper's Club!
                  </p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer('Avançar')}
                  className="bg-primary text-black font-bold text-xl px-12 py-4 rounded-full hover:bg-yellow-400 transition-all"
                >
                  Avançar
                </motion.button>
              </div>
            ) : currentQuestion.type === 'benefits' ? (
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                  {currentQuestion.title}
                </h2>

                <div className="space-y-4 mb-8">
                  {currentQuestion.items?.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start bg-gray-900/50 p-4 rounded-lg border border-gray-800"
                    >
                      <span className="text-primary text-2xl mr-4 flex-shrink-0">✓</span>
                      <span className="text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4">
                  {currentQuestion.info?.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option)}
                      className={`w-full p-4 rounded-lg font-semibold text-lg transition-all ${
                        index === 0
                          ? 'bg-primary text-black hover:bg-yellow-400'
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                  {currentQuestion.title}
                </h2>

                <div className="space-y-4">
                  {currentQuestion.options?.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option)}
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg font-semibold text-lg transition-all border border-gray-700 hover:border-primary"
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
