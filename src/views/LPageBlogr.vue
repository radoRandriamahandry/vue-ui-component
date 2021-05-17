<template>
  <HeroSection />
  <div class="mt-20">
    <h2
      class="py-10 text-2xl font-semibold text-center text-blogr-primary-blue"
    >
      Designed for the future
    </h2>
    <SectionWithTwoColumn push-to="right">
      <template #left>
        <div class="pr-28">
          <div>
            <h3 class="text-xl text-blogr-primary-blue">
              Introducing an extensible editor
            </h3>
            <p class="mt-5">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div class="mt-14">
            <h3 class="text-xl text-blogr-primary-blue">
              Robust content Management
            </h3>
            <p class="mt-5">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </template>
      <template #right>
        <div class="relative h-full">
          <img
            class="absolute -top-1/2"
            src="/src/assets/LPageBlogr/illustration-editor-desktop.svg"
            alt=""
          />
        </div>
      </template>
    </SectionWithTwoColumn>
  </div>
</template>

<script>
import HeroSection from "../components/blogr/layouts/HeroSection.vue"
import SectionWithTwoColumn from "../components/blogr/layouts/SectionWithTwoColumn.vue"
export default {
  components: {
    HeroSection,
    SectionWithTwoColumn,
  },
}
</script>
