# Feedback

_Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview_

## Goals

1.  Working portfolio:

    - For a working portfolio, I think you have reached this goal. It is not finished but is very close to being done.
    - With all of the layouts sorted, you just need to work on the content. What will you put in the Stack, how do you want to display your projects?

2.  Practice using Git / Github Flow:

    - Yes, you have 100% achieved this. You will have to keep it up, carry on branching and committing.
    - Try and keep your branches to features / or specific pages and keep them small and focused to that feature

3.  Application of morning topics
    - Yes, I think you have achieved this goal. I can see you have used everything with have covered so far.
    - You should go over BEM and Try out separating your files scss files even more. I will add more on improvements at the end.

---

## Specification

1. README - not done

   - Get in the habit of writing README's for every project, you can also add more to this one.
   - Add in the link to your Figma design
   - If you are adding links in a md file you can do it like this [example link](https://www.markdownguide.org/basic-syntax/#links) rather than a URL

2. BRANCHING - done

   - Nice work on this, one thing to consider is when you go onto a larger project you wil be creating feature branches which are focused on that one feature.

3. SCSS - done / to work on

   - Keep on exploring SCSS, look at mixins and other features the pre processor will give you.
   - Try breaking your scss files down even more. e.g. Components is a folder with a scss file for each component. - I will go into this in the to work on

4. Mobile First - done

5. 25 commits - done

6. BEM - to work on

---

## Overall

As I said during the demo I think you have relished the chance to apply what we covered in the morning into your project. Kudo's for that, you changed direction and started again so good going for that. You have a design that matches your figma and thats rad! I am going to give you some constructive feedback to take on to this project and to take forward to your next projects.

---

## To work on

I think you just need to work naming with BEM and breaking your files down with SCSS.

For BEM:

- Have a read of the [BEM docs](http://getbem.com/naming/).
- Do a little refresher with [Kevin Powell](https://www.youtube.com/watch?v=SLjHSVwXYq4)

At the moment you have gone of topic with your class names. It is only ever block, block\_\_element or block\_\_element--modifier not `class="header__tnav__ul__li"` which is block\_\_element\_\_element\_\_element.
Also you want your class names to be more descriptive then the html tag.

Your code.

```html
<header class="header">
  <nav class="header__nav">
    <i class="fas fa-bars header__nav__i"></i>
  </nav>
  <nav class="header__tnav">
    <ul class="header__tnav__ul">
      <li class="header__tnav__ul__li">Home</li>
      <li class="header__tnav__ul__li">About</li>
      <li class="header__tnav__ul__li">Portfolio</li>
      <li class="header__tnav__ul__li">Contact</li>
    </ul>
  </nav>
  <div class="header__socials">
    <i class="fab fa-linkedin-in header__socials__i1"></i>
    <i class="fab fa-github header__socials__i2"></i>
    <i class="far fa-file-pdf header__socials__i3"></i>
  </div>
</header>
```

Could be.

```html
<nav class="navigation">
  <i class="fas fa-bars navigation__burger-menu"></i>

  <ul class="navigation__links">
    <li class="navigation__link">Home</li>
    <li class="navigation__link">About</li>
    <li class="navigation__link">Portfolio</li>
    <li class="navigation__link">Contact</li>
  </ul>

  <div class="navigation__social-icons">
    <i class="fab fa-linkedin-in header__social-icon--linkedin"></i>
    <i class="fab fa-github header__social-icon--github"></i>
    <i class="far fa-file-pdf header__social-icons--resume"></i>
  </div>
</nav>
```

With SCSS:

- In the next project have a go at treating your `_components.scss` as a folder with your components in.
- Each component will be its own .scss file with its media queries in there. This will make it easier to navigate once you are use to it.
- In main you bring them all together in there.
