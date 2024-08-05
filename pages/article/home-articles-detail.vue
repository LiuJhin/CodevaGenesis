<template>
  <div class="article-detail">
    <div class="cover-image">
      <img :src="article.coverImage" alt="Article Cover" />
    </div>
    <div class="article-content">
      <h1 class="title">{{ article.title }}</h1>
      <p class="author">by {{ article.author }}</p>
      <div class="content" v-html="article.content"></div>
    </div>
    <div class="interactions">
      <button @click="likeArticle" class="like-button">
        <span>👍</span> {{ likes }}
      </button>
      <button @click="toggleComments" class="comments-button">
        <span>💬</span> Comments ({{ comments.length }})
      </button>
    </div>
    <div v-if="showComments" class="comments-section">
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <p class="comment-author">{{ comment.author }}</p>
        <p class="comment-content">{{ comment.content }}</p>
        <button @click="replyToComment(comment)" class="reply-button">
          Reply
        </button>
        <div v-if="comment.replies && comment.replies.length" class="replies">
          <div v-for="reply in comment.replies" :key="reply.id" class="reply">
            <p class="comment-author">{{ reply.author }}</p>
            <p class="comment-content">{{ reply.content }}</p>
          </div>
        </div>
      </div>
      <div class="new-comment">
        <textarea
            v-model="newComment"
            placeholder="Add a comment..."
        ></textarea>
        <button @click="postComment" class="post-comment-button">
          Post Comment
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const article = ref({
  coverImage:
      "https://images.unsplash.com/photo-1721627679019-1c065961a6b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Front-end authority management ideas",
  author: "Kevin Liu",
  content:
      "<p>Front-end permission management is a critical process that ensures the user interface displays the correct content and functionalities based on the user's roles and permissions. It typically involves authentication (determining who the user is) and authorization (determining what resources the user can access), using policies and rules to control access to specific UI components and data. With well-designed permission management, it is possible to protect sensitive data, prevent unauthorized access, and provide a tailored user experience....</p>",
});

const likes = ref(12);
const hasLiked = ref(false);
const comments = ref([
  {
    id: 1,
    author: "Alice",
    content: "Great article! Really insightful.",
    replies: [
      { id: 1, author: "Bob", content: "I agree! The examples were very helpful." }
    ]
  },
  {
    id: 2,
    author: "Bob",
    content: "I found the section on authentication very useful.",
    replies: []
  },
  {
    id: 3,
    author: "Charlie",
    content: "This article helped me a lot. Thanks for sharing!",
    replies: []
  },
]);
const showComments = ref(true);
const newComment = ref("");

const likeArticle = () => {
  if (hasLiked.value) {
    likes.value -= 1;
    hasLiked.value = false;
  } else {
    likes.value += 1;
    hasLiked.value = true;
  }
};

const toggleComments = () => {
  showComments.value = !showComments.value;
};

const postComment = () => {
  if (newComment.value.trim()) {
    comments.value.push({
      id: comments.value.length + 1,
      author: "Tourists",
      content: newComment.value,
      replies: []
    });
    newComment.value = "";
  }
};

const replyToComment = (comment) => {
  // Handle reply logic here
};
</script>

<style lang="scss" scoped>
.article-detail {
  max-width: calc(100% * 3 / 2);
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
}

.cover-image img {
  width: 100%;
  height: 800px;
  border-radius: 10px;
  object-fit: cover;
  transition: opacity 0.3s;
}

.cover-image img:hover {
  opacity: 0.9;
}

.article-content {
  padding: 20px;
}

.title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.author {
  color: #555;
  font-size: 16px;
  margin-bottom: 20px;
}

.content {
  line-height: 1.6;
  font-size: 18px;
  color: #444;
}

.interactions {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

.like-button,
.comments-button {
  padding: 10px 20px;
  border: none;
  background: #f5f5f5;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #e0e0e0;
    transform: translateY(-3px);
  }
}

.comments-section {
  margin-top: 20px;
}

.comment {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 30px;
}

.comment-author {
  font-weight: bold;
  color: #333;
}

.comment-content {
  margin-top: 5px;
  color: #555;
}

.reply-button {
  margin-top: 5px;
  padding: 5px 10px;
  border: none;
  background: #ddd;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #ccc;
  }
}

.replies {
  margin-top: 10px;
  padding-left: 20px;
  border-left: 1px solid #ddd;
}

.reply {
  padding: 10px 0;
}

.new-comment {
  margin-top: 20px;
}

.new-comment textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.post-comment-button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background: #333;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #555;
    transform: translateY(-3px);
  }
}
</style>
