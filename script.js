'use strict';
const submit = document.querySelector('.submit');
const messageEl = document.querySelector('.modal-text');
const headingEl = document.querySelector('.heading');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclose = document.querySelector('.close');

const displayMessage = function (message) {
  messageEl.textContent = message;
};

const displayHeading = function (heading) {
  headingEl.textContent = heading;
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//DOM Manipulation
submit.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  const input = Number(document.querySelector('.input').value);

  if (!input) {
    displayMessage('Input your age');
    displayHeading('#');
  }
  // when age is between 1 and 14
  else if (input >= 1 && input <= 14) {
    displayHeading('#' + input);
    displayMessage(
      `Sorry advice is not availabe for your age group. Thanks for checking out😊 I love you more than you love garri😂😌`
    );
  } else if (input >= 15 && input <= 19) {
    displayHeading('#' + input);
    displayMessage(
      `At this age, it's important to focus on your own personal growth and not just a relationship. Pursue your passions and interests, and make sure you're taking care of yourself emotionally and physically.Good luck and have fun with your life!😍😍`
    );
  } else if (input === 20) {
    displayHeading('#' + input);
    displayMessage(
      `At 20 years old, it’s a great time to focus on your personal growth and development. It’s okay to not be in a relationship at this age and to enjoy the freedom and independence that comes with youth. Take advantage of this time to travel, try new things, and make meaningful connections with friends and family. When the time is right, you’ll know if you’re ready for a relationship.💖💖`
    );
  } else if (input === 21) {
    displayHeading('#' + input);
    displayMessage(
      `At age 21 years old, you're just starting to explore the world and figure out who you are. Don't feel like you need to be in a relationship to validate your life. Enjoy your freedom and take advantage of all the opportunities that come your way and you may find that you’re more suited to being single for now.💖💖`
    );
  } else if (input === 22) {
    displayHeading('#' + input);
    displayMessage(
      `At age 22, you're in a great place to start exploring your options and figuring out what you want in life. If you’re not in a relationship, that’s okay. Don't feel pressured to start a relationship. Enjoy your freedom and invest in friendships and hobbies that bring you happiness.💖💖`
    );
  } else if (input === 23) {
    displayHeading('#' + input);
    displayMessage(
      `At age 23, you’re starting to gain more independence and confidence. You might feel like you need to settle down, but remember that a relationship shouldn't define your worth or happiness. Focus on your personal growth and when the time is right, the right relationship will come naturally.💖💖`
    );
  } else if (input === 24) {
    displayHeading('#' + input);
    displayMessage(
      `At age 24, this is a great age to start thinking about what you want in a partner. Write down your must-haves and deal-breakers, and don't settle for less in a relationship. But, if you do happen to meet someone who sparks your interest, don't be afraid to give it a shot. Just make sure you communicate openly and honestly about what you both want from the relationship.💖💖`
    );
  } else if (input === 25) {
    displayHeading('#' + input);
    displayMessage(
      `At age 25, you're in a great place to start thinking about what you want in a relationship and it’s a great time to reflect on what you want in a partner and what you bring to the table as a potential partner. Take the time to get to know yourself and what you're looking for in a partner. Don’t be afraid to take your time to find someone who aligns with your values and goals.💖💖`
    );
  } else if (input === 26) {
    displayHeading('#' + input);
    displayMessage(
      `At age 26, you're gaining confidence and independence. Don't feel like you need to be in a relationship to validate your worth. Focus on your career and personal goals, and let a relationship develop organically. If you do find that special someone, just make sure you're both on the same page about what you want from the relationship and that you're ready for the commitment.💖💖`
    );
  } else if (input === 27) {
    displayHeading('#' + input);
    displayMessage(
      `At age 27, this is a great age to evaluate your past relationships and what you want in a partner. Be honest with yourself and don't settle for anyone who doesn't align with your values and goals. You may be feeling a bit of pressure to settle down and be in a relationship. But, don't settle for just anyone! Make sure you find someone who you have a real connection with and who makes you truly happy.💖💖`
    );
  } else if (input === 28) {
    displayHeading('#' + input);
    displayMessage(
      `At age 28, you're at a turning point in your life. If you're single, embrace it and focus on personal growth. If you're in a relationship, make sure it's supportive and fulfilling. Remember that the most important thing is to make sure you're ready for a relationship and that you've found someone who you genuinely connect with and who makes you happy. Good luck, and have fun!💖💖`
    );
  } else if (input === 29) {
    displayHeading('#' + input);
    displayMessage(
      `At age 29, you're starting to gain more perspective and maturity. If you're not in a relationship, that's okay. You may start to feel like time is running out and you need to be in a relationship ASAP. But, don't settle for just anyone! Make sure you find someone who you have a real connection with and who makes you truly happy. Good luck, and have fun!💖💖`
    );
  } else if (input === 30) {
    displayHeading('#' + input);
    displayMessage(
      `At age 30, you may be more established in your career and ready to start a family. If you haven’t found someone to share your life with, don’t worry. There are plenty of people out there looking for a meaningful relationship, and there’s no rush to settle down. Focus on being happy with yourself and the right person will come along.💖💖`
    );
  } else if (input === 31) {
    displayHeading('#' + input);
    displayMessage(
      `At age 31, you may start to feel like you're missing out on having someone to share your life with. But, don't settle for just anyone! Make sure you find someone who shares your values and goals and who you truly connect with.💖💖`
    );
  } else if (input === 32) {
    displayHeading('#' + input);
    displayMessage(
      `At age 32, this is a great age to focus on self-improvement and personal growth. If you’re not married yet but you're in a relationship, make sure it's healthy and supportive and make sure you communicate openly and honestly about what you both want from the relationship. Lastly, it’s advisable not to stay long trying to perfect any relationship; it will be of benefit if you start having your children now.💖💖`
    );
  } else if (input === 33) {
    displayHeading('#' + input);
    displayMessage(
      `At age 33, this is a time for reflection and introspection. You should be married by now and if not, that’s not bad. That doesn’t mean you that you won’t get a partner forever. Take your time to find the best one that suit you and if you're in a relationship, make sure it's fulfilling and healthy. Good luck!💖💖`
    );
  } else if (input === 34) {
    displayHeading('#' + input);
    displayMessage(
      `At age 34, you might be at a crossroads in your life. If you're single, embrace your independence and focus on personal growth. Remember, you can’t be single for life. Take your time to find the best one that suit you and if you're in a relationship, make sure it's fulfilling and healthy. Good luck!💖💖`
    );
  } else if (input === 35) {
    displayHeading('#' + input);
    displayMessage(
      `At age 35, you may be feeling the pressure to settle down and start a family. Remember, there’s no right or wrong timeline for finding love and starting a family. If you’re content being single, that’s great. If you’re looking for a relationship, don’t settle for anyone who doesn’t meet your standards. You deserve to be with someone who makes you happy.💖💖`
    );
  } else if (input === 36) {
    displayHeading('#' + input);
    displayMessage(
      `At age 36, you may be feeling the pressure to settle down and start a family. Remember, there’s no right or wrong timeline for finding love and starting a family and this is a great time to evaluate your life goals and what you want in a relationship. Make sure the person you're with aligns with your values and supports your personal growth.💖💖`
    );
  } else if (input === 37) {
    displayHeading('#' + input);
    displayMessage(
      `At this age,you may be starting to feel like you're running out of time to find someone to share your life with. But, don't settle for just anyone! Make sure you find someone who you have a real connection with and who makes you truly happy.💖💖`
    );
  } else if (input === 38) {
    displayHeading('#' + input);
    displayMessage(
      `At this age,you may be starting to feel like you're running out of time to find someone to share your life with. But, don't settle for just anyone! Make sure you find someone who you have a real connection with and who makes you truly happy.💖💖`
    );
  } else if (input === 39) {
    displayHeading('#' + input);
    displayMessage(
      `At this age,you may be starting to feel like you're running out of time to find someone to share your life with. But, don't settle for just anyone! Make sure you find someone who you have a real connection with and who makes you truly happy.💖💖`
    );
  } else if (input >= 40 && input <= 49) {
    displayHeading('#' + input);
    displayMessage(`At this age, you’ve likely built a fulfilling life for yourself and have a lot to offer a potential partner. If you’re still searching for love, don’t give up. There are plenty of people out there looking for a meaningful relationship at any age. Keep an open mind and focus on building meaningful connections with others, and love may come naturally.💖💖

`);
  } else if (input >= 50 && input <= 200) {
    displayHeading('#' + input);
    displayMessage(
      `Sorry advice is not availabe for your age group. Thanks for checking out😊 I love you more than you love garri😂😌`
    );
  }
});

btnclose.addEventListener('click', closeModal);
// input.addEventListener('keypress', function () {
//   document.querySelector('.input').style.width = '50%';
// });
