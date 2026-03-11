import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

const featureCards = [
  { icon: "FlaskConical", title: "Опыты дома", desc: "Эксперименты из подручных материалов — без лаборатории" },
  { icon: "Zap", title: "Живые объяснения", desc: "Каждый закон — через явление, которое можно увидеть" },
  { icon: "Trophy", title: "Прогресс виден", desc: "Система заданий с мгновенной обратной связью" },
]

const aboutCards = [
  { icon: "Brain", title: "Понимание", desc: "Не зубрёжка формул, а настоящее понимание физики" },
  { icon: "Sparkles", title: "Интерес", desc: "Темы связаны с реальной жизнью — смартфоны, спорт, природа" },
  { icon: "Users", title: "Для 7–8 класса", desc: "Программа точно совпадает со школьным курсом" },
]

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText }: SectionProps) {
  const isFeatures = id === 'features'
  const isAbout = id === 'about'
  const cards = isFeatures ? featureCards : isAbout ? aboutCards : null

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && !cards && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {cards && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:border-[#7C3AED]/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center mb-4">
                <Icon name={card.icon} size={20} className="text-[#7C3AED]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#7C3AED] bg-transparent border-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-colors text-base px-8"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
