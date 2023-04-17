import { Paragraph } from '@/components/Molecule/Paragraph/Paragraph'
import Link from 'next/link'
import data from '@/data/data.json'

export default function Home() {
  return (
    <div>
      <Paragraph>{data.lorem.long}</Paragraph>
    </div>
  )
}
