import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import styles from "./FullPost.module.css";

const FullPost = () => {
  const { id } = useParams();
  const [postItem, setPostItem] = React.useState("");

  React.useEffect(() => {
    try {
      axios
        .get(
          `https://62c1dce62af60be89ecefccf.mockapi.io/react-blog-mockapi_posts/?id=${id}`
        )
        .then(({ data }) => setPostItem(data[0]));
    } catch (error) {
      alert("Произошла ошибка при получении поста");
      console.log(error);
    }
  }, []);

  return (
    <div className={styles.root}>
      <h1 className="title">{postItem.title}</h1>
      <p>Published {postItem.date}</p>
      <ul>
        {postItem &&
          postItem.subCategory.map((category) => {
            return <li>{category}</li>;
          })}
      </ul>
      <div className={styles.imgBlock}>
        <img src={postItem.img} alt="post image" />
      </div>
      <p>
        Home... to me, it is my nest, my cave, my comfort zone for heart and
        soul, my safe haven. Home is also the place where I design my
        environment to reflect my personality, turning my surroundings into an
        extension of myself and making them part of me visually as well as
        ideologically. Home is where I come back to after an outing, and it
        awaits me with my worn slippers, my comfy recliner and my happy pets.
        Home is where I know every nook and cranny, every creak and groan, every
        smell and every patch of light and shadow. My home is my castle... I
        have the right to make it almost inaccessible to unwelcome intruders and
        welcoming to those I love and respect. It is my retreat from the world,
        the showcase for my treasures, and the stronghold of my values. Home...
        it is my second skin, my soil in which I am rooted, the roof over my
        head and the blanket for my soul. Sometimes I wonder how a
        professionally decorated house or apartment can be a real home to the
        people who live in it. To me, it seems as if that was the same as
        wearing a stranger's clothes or somebody else's prescription glasses.
        Sure, it may serve the basic purpose and it may look better than if you
        used your own things and ideas, but it's just not you. Isn't hiring
        somebody to create your living space, your home, a lot like having the
        secretary choose your friend's birthday present flowers and put a
        birthday card in front of you to sign while making your dinner
        reservations? The birthday is remembered and observed, the employee
        quite possibly has impeccable taste and chooses well, yet the whole
        setup misses the original idea by miles. What about adding one's own
        personal touches to a professionally created environment then? Would
        this fix the problem? It might – but usually, such a professionally
        designed environment is finely balanced, and changes or additions as
        small as a misfit picture frame in the wrong place or a chair pulled
        closer to the coffee table for comfort mar the professional's
        composition and, in a way, defeat the purpose behind hiring a decorator
        in the first place. I personally believe that a home should grow over
        time and be cultivated by those who live in it, rather than be served
        like a classy but prefabricated dinner by a stranger. Strangers just
        never put the right amount of salt in it, if you ask me. Have you ever
        watched a dog turn 'round and 'round before finally lying down for a
        cozy nap? Some animals in the wild do the same thing, and I think the
        purpose of this is to create a sort of molded dip in the ground cover
        for added comfort. As for me, I like my slippers molded to my feet, my
        chair molded to my body and, generally, my home molded to my mind and
        soul. These things do add a lot of comfort to the dog bed part of life.
        Comfort is not the only reason for having things "just so", though. If
        you have a runaway brain cell (singular) like I do, you probably live
        pretty much on instinct at least some of the time. Living on instinct
        means, in part, that you don't notice much of what you're used to, but
        anything out of the ordinary makes you perk up your ears and squirt some
        adrenaline through your system just in case it's needed. For me, any
        unfamiliar noise, smell or sight does it, and I get flighty without
        meaning to. At the same time, being in my familiar, second-skin
        surroundings at home gives me peace of mind and a feeling of security
        which is as intense as that nervousness is. I suppose you could say that
        there is a lot of mental and emotional security in old slippers and the
        faint buzzing of your refrigerator. Security. Have you ever noticed that
        your home is the only place in the world where your level of security is
        entirely up to you? You have choices ranging from unlocked doors to
        barred windows, both in the physical and the figurative sense. You have
        the option to keep out the unwelcome by way of locks, caller ID and the
        "off" button on the TV. Although there are exceptions such as determined
        criminals or junk e-mail over which we can't always have control, the
        home is where we make the rules, where we decide what or who may be part
        of our personal lives. Whether we entertain friends, have a family
        get-together, take in stray animals or people, or post "No Trespassing"
        signs around our property and refuse the traveling salesman or
        missionary, it's our choice.
      </p>
    </div>
  );
};

export default FullPost;
