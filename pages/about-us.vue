<template>
  <div class="content">
    <div class="about-us">
      <header class="about-us-header">
        <h1>About Us</h1>
      </header>
      <section class="about-us-content">
        <p>
          Welcome to the About Us page! We are a team of dedicated professionals
          committed to providing the best service possible.
        </p>
        <p>
          Our team has a wide range of expertise and experience, ensuring that
          we can handle any challenges that come our way.
        </p>
        <p>
          Thank you for taking the time to learn more about us. If you have any
          questions, feel free to <a href="/contact">contact us</a>.
        </p>
      </section>
      <section class="about-us-team">
        <div
          class="team-member"
          v-for="(member, index) in teamMembers"
          :key="index"
        >
          <img
            :src="member.image"
            :alt="member.name"
            class="team-member-image"
          />
          <h3>{{ member.name }}</h3>
          <p>{{ member.position }}</p>
        </div>
      </section>
      <footer class="about-us-footer">
        <p>&copy; 2024 Kevin Liu. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: url("https://n.sinaimg.cn/sinakd20116/232/w1552h1080/20231204/9e5f-f0397afd9c24ce92251144a390604378.jpg")
    no-repeat center center fixed;
  background-size: cover;
  padding: 20px;
  box-sizing: border-box;
}

.about-us {
  font-family: Arial, sans-serif;
  color: #333;
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;
  text-align: center;
}

.about-us-header {
  margin-bottom: 20px;
}

.about-us-header h1 {
  font-size: 4em;
  color: #000;
}

.about-us-content {
  margin-bottom: 40px;
}

.about-us-content p {
  line-height: 1.6;
  font-size: 1.2em;
  margin-bottom: 15px;
}

.about-us-content a {
  color: #007bff;
  text-decoration: none;
}

.about-us-content a:hover {
  text-decoration: underline;
}

.about-us-team {
  margin-bottom: 40px;
}

.about-us-team h2 {
  font-size: 3.5em;
  margin-bottom: 20px;
}

.team-member {
  display: inline-block;
  width: 200px;
  margin: 10px;
  text-align: center;
}

.team-member-image {
  width: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
}

.team-member h3 {
  font-size: 2.5em;
  margin-bottom: 5px;
}

.about-us-footer {
  font-size: 1.9em;
}
</style>

<script setup>
import { ref } from "vue";

const teamMembers = ref([
  {
    name: "Kevin Liu",
    position: "Software development engineer who loves photography",
    image: "https://a.520gexing.com/uploads/allimg/2023092512/as2zf5mkrr5.jpg",
  },
]);
</script>
