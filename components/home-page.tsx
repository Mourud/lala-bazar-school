/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qTkhpAXfrvP
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export function HomePage() {
  return (
    <div key="1" className="flex flex-col gap-2 min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Rural School</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Students
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Achievements
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Sponsorships
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex flex-col gap-4">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Bridging the Gap</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Providing quality education to rural children. Your support can change lives.
              </p>
            </div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#"
            >
              Donate Now
            </Link>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col gap-4 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our School</h2>
              <p className="max-w-3xl text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Our school is located in the heart of a rural community. We believe that every child deserves access to
                quality education, regardless of their background or circumstances.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 items-start justify-start gap-4 md:grid-cols-2 md:gap-8">
              <div className="flex flex-col gap-2">
                <img
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="500"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="grid w-full grid-cols-2 items-start justify-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Our Mission</h3>
                    <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                      To provide a nurturing and inclusive environment where students can grow, learn, and develop the
                      skills they need to succeed in life.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Our Vision</h3>
                    <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                      A future where all our students have the opportunity to reach their full potential, and the
                      support they need to pursue their dreams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Students</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Meet the bright young minds who inspire us every day.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 items-stretch justify-center gap-4 min-[400px]:grid-cols-2 [&>img]:mx-auto">
              <img
                alt="Student Photo"
                className="aspect-[1/1] rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
              <img
                alt="Student Photo"
                className="aspect-[1/1] rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
              <img
                alt="Student Photo"
                className="aspect-[1/1] rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
              <img
                alt="Student Photo"
                className="aspect-[1/1] rounded-lg object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="250"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col gap-4 px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="max-w-3xl text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Read about the inspiring journeys of individuals who have graduated from our school and achieved great
                success.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Our School</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Your contribution can make a real difference in the lives of our students. Choose a sponsorship level
                that suits you.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[900px] grid gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">Gold Sponsor</h3>
                <p className="text-2xl font-bold">$10,000</p>
                <p className="text-gray-500 dark:text-gray-400">
                  - Named sponsor for one year - Logo on school website - Plaque in school entrance
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">Platinum Sponsor</h3>
                <p className="text-2xl font-bold">$25,000</p>
                <p className="text-gray-500 dark:text-gray-400">
                  - Named sponsor for two years - Logo on school website - Plaque in school entrance - Mention in press
                  releases
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">Diamond Sponsor</h3>
                <p className="text-2xl font-bold">$50,000</p>
                <p className="text-gray-500 dark:text-gray-400">
                  - Named sponsor for five years - Logo on school website - Plaque in school entrance - Mention in press
                  releases - Opportunity to visit the school and meet the students
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Make a Donation</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Help us continue our mission of providing quality education to rural children. Every contribution makes
                a difference.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Donate</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">Enter the amount you would like to donate.</p>
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-gray-900 text-gray-50 hover:bg-gray-800" type="button">
                  Donate Monthly
                </Button>
                <Button className="bg-gray-900 text-gray-50 hover:bg-gray-800" type="button">
                  One-time Donation
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input className="max-w-lg flex-1" placeholder="Enter amount" type="number" />
                <Select className="max-w-[150px]">
                  <SelectTrigger>
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Rural School. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}