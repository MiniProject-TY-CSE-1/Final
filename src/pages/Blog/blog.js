import React from "react";
import BlogCard from "./BlogCard";
import "./BlogCard";
const Blog = () => {
  const blogData = [
    {
      title: "Virabhadrasana I",
      image:
        "https://www.verywellfit.com/thmb/msq-0CCB32RWlpAW63Z7aCNwbX4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Verywell-01-3567198-WarriorOne-acb9d35e634e4f548c2d251e9c739c74.jpg",
      description: ` Virabhadrasana I, also known as Warrior Pose I, is a fundamental yoga pose that is part of many yoga traditions, including Hatha, Vinyasa, and Ashtanga yoga. This pose is named after the mythical warrior Virabhadra, created by Lord Shiva in Hindu mythology. Virabhadrasana I is a standing pose that is known for its strength-building and grounding benefits, as well as its capacity to enhance focus, balance, and flexibility.
   `,
    },
    {
      title: "Utthita Parvakonasana",
      image:
        "https://visa-forme.fr/wp-content/uploads/2022/12/Utthita-Parsvakonasana.jpg",
      description: `Also Known As: Warrior Angle (Virabhadra Konasana)

      Targets: Legs, hips, hamstrings, chest-opener
      
      Level: Beginner
      
      Extended Side Angle Pose is often taught in Vinyasa flow classes as part of a standing sequence. It is a great opportunity to deepen into a classic shape with a focus on balance, breath, and extending through the side body. You might also use it to prepare for poses that have a wide groin spread, such as Bound Angle Pose or Wide-Angle Seated Forward Fold Pose.`,
    },
    {
      title: "Uttanasana",
      image:
        "https://femina.wwmindia.com/content/2019/jan/yoga-asanas-uttanasana-or-standing-forward-bend-pose-10332652841548825651.jpg",
      description:
        "As part of the Sun Salutation sequence, Standing Forward Bend (also known as Uttanasana) is done often in Vinyasa-style practice. In that sequence, it is performed both near the beginning and at the end. Do not rush through this bend, especially because forward bends allow your body to release more deeply over a longer hold time. Standing Forward Bend stretches and lengthens the hamstrings and calves.",
    },

    {
      title: "Ardha Uttanasana",
      image:
        "https://yogapractice.com/wp-content/uploads/2020/10/Inhale-Ardha-Uttanasana-Half-Standing-Forward-Fold-or-Halfway-Lift.jpg",
      description: `Also Known As: Standing half forward bend, flat back

      Targets: Hamstrings, calves, torso
      In Sanskrit, Ardha Uttanasana means "intense half stretch pose." The pose certainly gives your hamstrings a great stretch, but it also encourages good spinal alignment. Forward bends also stimulate your abdominal organs and promote good digestion.`,
    },

    {
      title: "Parsvottanasana",
      image:
        "https://fitsri.com/wp-content/uploads/2020/09/parsvottanasana-intense-side-stretch-pose.jpg",
      description: `Also Known As: Intense Side Stretch Pose, Intense Flank Stretch Pose

      Targets: Hamstrings, shoulders
      Pyramid Pose is one of those poses where you can really see the results of consistent practice. It's also a great warmup for any hamstring intensive poses that you might have planned. Keeping your hands on the floor or on blocks at first will prevent tipping over. It's OK to widen your stance toward the sides of your mat for the same reason. Later, you can start to incorporate your core strength more by lifting your hands off the floor and narrowing your stance.`,
    },
    {
      title: "Urdhva Hastasana",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.mSlriMNOhM23fY59xO92fwHaHa&pid=Api&P=0&h=180",
      description: `This pose improves posture, strengthens the legs, and provides a full body stretch. If you've ever gotten out of bed in the morning and had a long languorous stretch, that's basically urdhva hastasana. But just as Mountain Pose is a lot more than just standing around, doing raised hands pose correctly requires attention to detail. In push-pull opposition, some parts of the body move down while others move up, taking this stretch to the next level.`,
    },
    {
      title: "Low Lunge",
      image:
        "https://manflowyoga.com/wp-content/uploads/2014/02/2013-09-22-21.08.19-1.jpg",
      description: `Steps : Stand in a split stance with your right front forward and your left foot straight back. Bend your right knee so that it is at about a 90-degree angle. This should put you into a forward lunge position. Place your hands on your forward knee. Keep your shoulders relaxed, your hips even, your chest open, and your gaze straight ahead.
      Press down with your hands and drive the hips forward until you feel a stretch from the front of your hip, groin, and thigh on your left side.
      Hold the stretch for about 20 to 30 seconds.
      Release and repeat on the other leg.`,
    },
    {
      title: "Tree Pose (Vrksasana)",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.nThTFhy7pBHB_xxJ8XC6wAHaE8&pid=Api&P=0&h=180",
      description: `Steps : Take a moment to feel both your feet root into the floor, your weight distributed equally on all four corners of each foot.
      Begin to shift your weight into your right foot, lifting your left foot off the floor. Keep your right leg straight but don't lock the knee.
      Bend your left knee and bring the sole of your left foot high onto your inner right thigh. 
      Press your foot into your thigh and your thigh back into your foot with equal pressure. This will help you keep both hips squared toward the front so your right hip doesn't jut out.
      Focus your gaze (Drishti) on something that doesn't move to help you keep your balance.
      Take 5 to 10 breaths, then lower your left foot to the floor and do the other side.`,
    },
    {
      title: "Plank Pose",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.ZJQ4N3TOJJ4_Trf6OWVynwHaE7&pid=Api&P=0&h=180",
      description: `Also Known As: Hover exercise, front plank

      Targets: Abdominals and core muscles Planking provides many physical benefits. Strengthening the core is an important aspect of any workout regimen. A strong and solid core looks and feels good. But more importantly, it helps to stabilize, balance, and power the body during just about every other activity.`,
    },
    {
      title: "Chakravakasana",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/meesho-static-ethinos/s3fs-public/inline-images/image%2010_1.jpg?LBLKd8JIsSR30wYnstg67qYAkFFtdbqC",
      description: `Flexing and extending the spine can help improve circulation in the discs in your back. It's a basic motion, but one that can be enormously beneficial in supporting the back and easing pain and maintaining a healthy spine, especially if you spend a lot of time sitting.

      Cat-Cow Stretch can help you improve your posture and balance. It is also believed to be a good stress-reliever and calming pose, since you link the movements with your breathing.`,
    },
    {
      title: "Bridge Pose",
      image:
        "https://blurbgeek.com/wp-content/uploads/2020/05/Bridge-Pose-Yoga-Asan-1024x683.jpg",
      description: `Steps : Tighten your abdominal and buttock muscles by pushing your low back into the ground.
      Raise your hips to create a straight line from your knees to your shoulders.
      Squeeze your core and pull your belly button back toward your spine.
      Hold for 20 to 30 seconds.
      Lower the hips to return to the starting position.`,
    },
    {
      title: "Bhujangasana",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.BUMl6afwlyqa2XwbwOhRZgHaDu&pid=Api&P=0&h=180",
      description: `Steps : Place your palms flat on the ground directly under your shoulders. Bend your elbows straight back and hug them into your sides.
      Pause for a moment looking straight down at your mat with your neck in a neutral position. Anchor your pubic bone to the floor.
      Inhale to lift your chest off the floor. Roll your shoulders back and keep your low ribs on the floor. Make sure your elbows continue hugging your sides. Don't let them wing out to either side.
      Keep your neck neutral. Don’t crank it up. Your gaze should stay on the floor.`,
    },

    {
      title: "Ashtanga Namaskara",
      image:
        "https://www.verywellfit.com/thmb/RucR4veShqG4QQtdFgBzHIIPlj8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/kneeschest1500-582ddbe33df78c6f6adf1632.jpg",
      description: `Steps : From Plank position, drop your knees to the floor. Breathe smoothly throughout the pose.
      Lower your chest and chin down to the floor, landing your shoulders right over your hands. Keep your elbows hugging into your sides. Your butt stays high and your toes stay tucked under. You'll be scrunched up like an inchworm.
      Hold the pose for one to five breaths.
      To exit the pose, lift your chin and slide your chest through your hands as you untuck your toes and straighten your legs to arrive in a Low Cobra, which is the next pose in the sun salutations.`,
    },
    {
      title: "Dandasana",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.IEfjfZjqrYEuuJp_dLv1sAHaEK&pid=Api&P=0&h=180",
      description: `Grab a yoga mat or towel if you need extra padding on a hard floor.

      Sit with your legs extended straight in front of you. Sit on your sit bones as much as possible. To that end, take hold of the flesh of each buttock and move it out of the way. This results in a much more grounded feeling.
      Engage your thigh muscles and flex both feet. Your heels may come up off the floor, but do your best to keep them rooted on the mat for engagement. Bend at the knees if needed.
      Stack the shoulders directly on top of the hips. Release your shoulders away from your ears.
      Hold your arms straight and palms flat on the floor on either side of your hips to support your spine. However, arm lengths vary so there is some discretion to bend your arms slightly or shift the placement of your palms.
      Inhale to lengthen your spine.
      Stay, if possible, for five deep breaths with the legs fully active.`,
    },
    {
      title: "Baddha Konasana",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.EbR_j1yUmAkAlRHVWpLV-AHaFz&pid=Api&P=0&h=180",
      description: `Cobbler's Pose opens the hips and groin. Babies and young children often sit on the floor in this position. Adults often lose the habit, tending instead to spend more time sitting in chairs with legs together. Postural problems, including back pain, can result.

      Stretching the hips and inner thighs in Baddha Konasana can begin to counteract the effects of spending too much time sitting at a desk or in a car. It will also help prepare you for other meditative seated poses, which require good flexibility in the hips and groin.`,
    },
    {
      title: "Corpse Pose (Savasana)",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.crvxP-uV0Di_Se6BJe7IZgHaDt&pid=Api&P=0&h=180",
      description: `Savasana allows your body and mind time to process what has happened during a yoga class, helping you wind down and relax. For this reason it is most often practiced at the end of a yoga session. It provides a necessary counterpoint to the effort you put forth during asana practice. You may also practice Savasana at home before sleeping3 as a way to quiet your mind and get more restful sleep.`,
    },
  ];
  return (
    <div className="">
      <h1 className="header-blog"> Blogs</h1>
      <div className="blog-app">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            image={blog.image}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
