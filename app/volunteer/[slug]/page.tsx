import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, Clock, ExternalLink } from "lucide-react"
import { volunteer } from "@/data/volunteer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return volunteer.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = volunteer.find((v) => v.slug === slug)

  if (!item) {
    return {
      title: "Volunteer Work Not Found",
    }
  }

  return {
    title: `${item.title} | ${item.org}`,
    description: item.bullets.join(" "),
    openGraph: {
      title: `${item.title} | ${item.org}`,
      description: item.bullets.join(" "),
      images: item.heroImage ? [{ url: item.heroImage }] : [],
    },
  }
}

export default async function VolunteerDetailPage({ params }: Props) {
  const { slug } = await params
  const item = volunteer.find((v) => v.slug === slug)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8" aria-label="Breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/#volunteer">Volunteer</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <span className="sr-only">You are here: </span>
                {item.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Back Button */}
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/#volunteer" aria-label="Back to Volunteer section">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Volunteer
          </Link>
        </Button>

        {/* Hero Image */}
        {item.heroImage && (
          <div className="mb-8 rounded-2xl overflow-hidden relative w-full h-64 md:h-96">
            <Image
              src={item.heroImage || "/placeholder.svg"}
              alt={`${item.title} hero image`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 896px, 896px"
              priority
            />
          </div>
        )}

        {/* Header */}
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-balance">{item.title}</h1>
              <p className="text-xl text-muted-foreground">{item.org}</p>
            </div>
            <div className="flex flex-col gap-3">
              {item.period && (
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{item.period}</span>
                </div>
              )}
              {item.location && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{item.location}</span>
                </div>
              )}
              {item.hours && (
                <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                  <Clock className="h-3 w-3" />
                  {item.hours}
                </Badge>
              )}
            </div>
          </div>

          {/* Overview */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">{item.bullets[0]}</p>
          </div>
        </Card>

        {/* Contributions */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-serif font-bold mb-6">Contributions</h2>
          <ul className="space-y-3">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Outcomes/Impact */}
        {item.outcomes && item.outcomes.length > 0 && (
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-serif font-bold mb-6">Outcomes & Impact</h2>
            <ul className="space-y-3">
              {item.outcomes.map((outcome, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-1.5 flex-shrink-0">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Gallery */}
        {item.gallery && item.gallery.length > 0 && (
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-serif font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.gallery.map((image, i) => (
                <div key={i} className="rounded-lg overflow-hidden relative w-full h-48 md:h-64">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${item.title} gallery image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px, 400px"
                  />
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Links */}
        {item.links && item.links.length > 0 && (
          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">Resources</h2>
            <div className="flex flex-wrap gap-3">
              {item.links.map((link, i) => (
                <Button key={i} variant="outline" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {link.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
