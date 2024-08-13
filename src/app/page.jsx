import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import avatarImage from '@/images/AVATAR.png'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon } from '@/components/SocialIcons'
 
import logoCPTS from '@/images/logos/CPTS.png'
import logoCBBH from '@/images/logos/CBBH.png'
import logoAWSCDA from '@/images/logos/AWSCDA.png'
import logoCCNA from '@/images/logos/CCNA.png'
import logoTAFE from '@/images/logos/TAFE.png'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'

import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
 

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}>
      <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
      <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500" />
    </svg>
  )
}


function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

 

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function Role({ role }) {

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-full w-full" unoptimized />
      </div>

      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"> {role.company} </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400"> {role.title} </dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label={`${endLabel}`}>
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Hack The Box Certified Penetration Testing Specialist',
      title: 'HTB CPTS',
      logo: logoCPTS,
      start: '',
      end: '2023',
    },
    {
      company: 'Hack The Box Certified Bug Bounty Hunter',
      title: 'HTB CBBH',
      logo: logoCBBH,
      start: '',
      end: '2023',
    },
    {
      company: 'AWS Certified Developer – Associate',
      title: 'AWS - CDA',
      logo: logoAWSCDA,
      start: '',
      end: '2019',
    },
    {
      company: 'Cisco Certified Network - Associate',
      title: 'CCNA',
      logo: logoCCNA,
      start: '',
      end: '2018',
    },
    {
      company: 'Diploma of Information Technology Networking',
      title: '',
      logo: logoTAFE,
      start: '',
      end: '2018',
    },
    {
      company: 'Certificate III In Information, Digital Media and Technology',
      title: '',
      logo: logoTAFE,
      start: '',
      end: '2017',
    },
  ]

  return (
    <div className=" ">
       <div className="">
          <ul role="list">
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="mailto:0xbishop@proton.me" icon={MailIcon} className="mt-6 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              0xbishop@proton.me
            </SocialLink>
            <SocialLink href="/certs" icon={BriefcaseIcon} className="mt-6 border-t border-zinc-100 pt-8 pb-2 dark:border-zinc-700/40">
              Certifications
            </SocialLink>
          </ul>
        </div>
        <ol className="mt-6 space-y-4"> {resume.map((role, roleIndex) => ( <Role key={roleIndex} role={role} /> ))} </ol>
    </div>
  )
}
 

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={avatarImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Daniel and this is a working title.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              todo. Chat Gippity
            </p>
 
          </div>
        </div>
 
        
      </div>
 
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        
        </div>
      </Container>
    </>
  )
}
