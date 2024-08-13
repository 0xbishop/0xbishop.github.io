import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Certs',
  description: 'Certifications and what they mean.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Certifications and what they mean."
      intro=""
    >
      <div className="space-y-20">
        <ToolsSection title="HTB CTPS">
          
          <Tool title=" https://academy.hackthebox.com/preview/certifications/htb-certified-penetration-testing-specialist/ ">
            Active Directory Penetration Testing <br></br>
            Attacking CMS <br></br>
            Attacking Common Services <br></br>
            Attacking Windows & Linux <br></br>
            Authentication & Authorization Attacks <br></br>
            Blind SQL Injection <br></br>
            Bypassing File Upload Restrictions <br></br>
            Command Injection <br></br>
            Cross-Site Scripting <br></br>
            Enumeration <br></br>
            File Inclusion <br></br>
            IDOR <br></br>
            Information Gathering <br></br>
            Lateral Movement <br></br>
            Linux Privilege Escalation <br></br>
            Penetration Testing <br></br>
            Pivoting <br></br>
            Post-exploitation Enumeration <br></br>
            Vulnerability Assessment <br></br>
            Vulnerability/Risk Reporting <br></br>
            Web Fuzzing <br></br>
            Web Proxy Usage <br></br>
            Windows Privilege Escalation <br></br>
            XML External Entity Injection <br></br>
          </Tool>
        </ToolsSection>
        <ToolsSection title="HTB CBBH">
          <Tool title="https://academy.hackthebox.com/path/preview/bug-bounty-hunter">
            Attacking APIs <br></br>
            Attacking CMS <br></br>
            Attacking Web Services <br></br>
            Authentication & Authorization Attacks <br></br>
            Blind Server-Side Request Forgery <br></br>
            Blind SQL Injection <br></br>
            Bug Bounty Hunting <br></br>
            Bypassing File Extension Filters <br></br>
            Bypassing File Upload Restrictions <br></br>
            Command Injection <br></br>
            Cross-Site Request Forgery <br></br>
            Cross-Site Scripting <br></br>
            Data Exfiltration <br></br>
            File Inclusion <br></br>
            HTTP Verb Tampering <br></br>
            IDOR <br></br>
            Information Gathering <br></br>
            JavaScript Deobfuscation <br></br>
            Manual & Automated Web Exploitation <br></br>
            Server-Side Request Forgery <br></br>
            Server-Side Template Injection <br></br>
            Session Hijacking <br></br>
            SQL Injection <br></br>
            Stored Cross-Site Scripting <br></br>
            Web Fuzzing <br></br>
            Web Proxy Usage <br></br>
            XML External Entity Injection <br></br>
          </Tool>


        </ToolsSection>
        <ToolsSection title="AWS CDA">
          <Tool title="https://aws.amazon.com/certification/certified-developer-associate/">
            Amazon Web Services <br></br>
            AWS <br></br>
            AWS Certification <br></br>
            AWS Cloud <br></br>
            Cloud Certification <br></br>
            Code Deployment <br></br>
            Code Development <br></br>
          </Tool>
          
        </ToolsSection>

        <ToolsSection title="CCNA">
          <Tool title="https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html">
            Access Connectivity <br></br>
            Architectures and Services <br></br>
            Assurance and Automation <br></br>
            Automation <br></br>
            Connectivity <br></br>
            Core Routing <br></br>
            High Availability and Fast Convergence <br></br>
            IP <br></br>
            IP services <br></br>
            Network Access <br></br>
            Network Fundamentals <br></br>
            Programability <br></br>
            Security <br></br>
            Security Fundamentals <br></br>
          </Tool>
          
        </ToolsSection>

        <ToolsSection title="Diploma of Information Technology Networking">
          <Tool title="https://tafeqld.edu.au/course/19/19030/diploma-of-information-technology">
          </Tool>
          
        </ToolsSection>

        <ToolsSection title="Certificate III In Information, Digital Media and Technology">
          <Tool title="https://tafeqld.edu.au/course/17/17940/certificate-iii-in-information-technology#course-overview-section">
          </Tool>
          
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
