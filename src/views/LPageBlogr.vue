<template>
  <HeroSection />
  <h2
    class="py-10 mt-32 text-2xl font-semibold text-center  text-blogr-primary-blue"
  >
    Designed for the future
  </h2>
  <div class="grid items-center grid-rows-3 gap-52">
    <!-- First section -->
    <SectionWithTwoColumn>
      <template #left>
        <div class="grid grid-cols-4">
          <div class="col-start-2 col-end-5">
            <Paragraphe background="light">
              <template #title> Introducing an extensible editor </template>
              <template #content>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </template>
            </Paragraphe>
            <div class="mt-14">
              <Paragraphe background="light">
                <template #title> Introducing an extensible editor </template>
                <template #content>
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you’re in full control.
                </template>
              </Paragraphe>
            </div>
          </div>
        </div>
      </template>
      <template #right>
        <div class="relative flex items-center h-full">
          <img
            class="absolute"
            src="/src/assets/LPageBlogr/illustration-editor-desktop.svg"
            alt=""
          />
        </div>
      </template>
    </SectionWithTwoColumn>
    <!-- Second section -->
    <SectionWithTwoColumn
      class="bg-gray-800 rounded-tr-blogr rounded-bl-blogr py-28"
    >
      <template #left>
        <!-- <div class="relative flex items-center w-full h-full">
          <img
            class="absolute"
            src="/src/assets/LPageBlogr/bg-pattern-circles.svg"
            alt=""
          />
        </div> -->
        <div class="relative flex items-center justify-center h-full">
          <img
            class="absolute block"
            src="/src/assets/LPageBlogr/illustration-phones.svg"
            alt=""
          />
        </div>
      </template>
      <template #right>
        <div class="pr-20">
          <Paragraphe background="dark">
            <template #title> State of the Art Infrastructure </template>
            <template #content>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </template>
          </Paragraphe>
        </div>
      </template>
    </SectionWithTwoColumn>
    <!-- Third section -->
    <SectionWithTwoColumn>
      <template #left>
        <div class="relative flex items-center h-full">
          <img
            class="absolute -left-1/4"
            src="/src/assets/LPageBlogr/illustration-laptop-desktop.svg"
            alt=""
          />
        </div>
      </template>
      <template #right>
        <div class="pr-20">
          <Paragraphe background="light">
            <template #title>Free, open, simple</template>
            <template #content>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </template>
          </Paragraphe>
        </div>
        <div class="pr-20 mt-10">
          <Paragraphe background="light">
            <template #title>Powerful tooling</template>
            <template #content>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites. learn.
            </template>
          </Paragraphe>
        </div>
      </template>
    </SectionWithTwoColumn>
    <div
      class="w-full  bg-blogr-neutral-dark-black-blue text-blogr-neutral-gray-blue rounded-tr-blogr"
    >
      <Footer />
    </div>
  </div>
</template>

<script>
import HeroSection from "../components/blogr/layouts/HeroSection.vue"
import SectionWithTwoColumn from "../components/blogr/layouts/SectionWithTwoColumn.vue"
import Paragraphe from "../components/blogr/layouts/Paragraphe.vue"
import Footer from "../components/blogr/layouts/Footer.vue"

export default {
  components: {
    HeroSection,
    SectionWithTwoColumn,
    Paragraphe,
    Footer,
  },
}
</script>
