import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from './components/Header'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import Clients from './components/Clients'
import FunFacts from './components/FunFacts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <Content1/>
    <Content2/>
    <Clients/>
    <FunFacts/>
    </>
  )
}
