export type CustomerReview = {
  id: string
  author: string
  rating: 4.5 | 5
  body: string
  date: string
  city: string
  state: string
}

export const customerReviews: CustomerReview[] = [
  {
    id: "glenn-j-gould",
    author: "Glenn J. Gould",
    rating: 5,
    body: "We were having a really hard time finding a charter bus at the last minute, but Credence Charter Bus was able to help us out. Communication was quick, the bus arrived when they said it would, and everything went smoothly. Really appreciated them coming through when we were in a bind.",
    date: "2025-04-18",
    city: "Dallas",
    state: "TX",
  },
  {
    id: "jake-mccarthy",
    author: "Jake McCarthy",
    rating: 5,
    body: "We had a passenger with a disability and needed an ADA-accessible bus, which made planning the trip a little stressful. Credence Charter Bus worked with us and made sure we had what we needed. The whole process was much easier than expected.",
    date: "2024-11-07",
    city: "Phoenix",
    state: "AZ",
  },
  {
    id: "lew-white",
    author: "Lew White",
    rating: 5,
    body: "Really good experience from the first phone call to the end of the trip. Credence Charter Bus answered our questions, gave us clear information, and kept everything on schedule. Would definitely use them again.",
    date: "2022-06-12",
    city: "Orlando",
    state: "FL",
  },
  {
    id: "elijah-miller",
    author: "Elijah Miller",
    rating: 4.5,
    body: "We booked transportation for a group trip and overall had a great experience with Credence Charter Bus. The driver was friendly and professional, and the bus was on time. There were a couple small communication issues during planning, but they got everything sorted out quickly.",
    date: "2023-09-23",
    city: "Columbus",
    state: "OH",
  },
  {
    id: "mason-jackson",
    author: "Mason Jackson",
    rating: 5,
    body: "We needed transportation for a company event and Credence Charter Bus made the process pretty straightforward. The driver was professional and the bus showed up on time. It took one less thing off our plate during a busy event.",
    date: "2021-03-16",
    city: "Chicago",
    state: "IL",
  },
  {
    id: "olivia-martinez",
    author: "Olivia Martinez",
    rating: 5,
    body: "Finding transportation for a large group isn’t always easy, but Credence Charter Bus made it simple. The booking process was smooth and everyone got where they needed to be without any issues.",
    date: "2025-07-09",
    city: "Charlotte",
    state: "NC",
  },
  {
    id: "amelia-rodriguez",
    author: "Amelia Rodriguez",
    rating: 5,
    body: "We ran into an unexpected transportation issue and weren’t sure how we were going to make the trip work. Credence Charter Bus was able to find a solution for us pretty quickly. Really appreciated the effort and flexibility.",
    date: "2020-01-28",
    city: "Denver",
    state: "CO",
  },
  {
    id: "isabella-lee",
    author: "Isabella Lee",
    rating: 5,
    body: "We used Credence Charter Bus for wedding transportation and were very happy with the service. Everything stayed on schedule, the driver was courteous, and our guests had a comfortable ride. Definitely made the transportation side of the wedding less stressful.",
    date: "2024-10-05",
    city: "Savannah",
    state: "GA",
  },
  {
    id: "noah-smith",
    author: "Noah Smith",
    rating: 4.5,
    body: "Booked transportation with Credence Charter Bus for a group airport transfer. The bus arrived on time and the driver was helpful with getting everyone organized. There was a little waiting around during pickup, but overall the experience was good.",
    date: "2019-05-21",
    city: "Boston",
    state: "MA",
  },
  {
    id: "sofia-allen",
    author: "Sofia Allen",
    rating: 5,
    body: "This was our second time using Credence Charter Bus, and they delivered again. Easy booking, good communication, and reliable transportation. That’s honestly why we came back in the first place.",
    date: "2026-02-14",
    city: "Austin",
    state: "TX",
  },
  {
    id: "aiden-clark",
    author: "Aiden Clark",
    rating: 5,
    body: "Our driver was one of the best parts of the trip. Very friendly, professional, and patient with our group. The bus was clean and everything went according to plan with Credence Charter Bus.",
    date: "2018-08-03",
    city: "Nashville",
    state: "TN",
  },
  {
    id: "owen-robinson",
    author: "Owen Robinson",
    rating: 4.5,
    body: "Our schedule changed a few times before the trip, which could have been a headache, but Credence Charter Bus worked with us and adjusted things. There were a few back-and-forth messages, but they were responsive and got everything worked out.",
    date: "2023-12-11",
    city: "Seattle",
    state: "WA",
  },
  {
    id: "lucas-harris",
    author: "Lucas Harris",
    rating: 5,
    body: "Had a great experience with Credence Charter Bus. The bus was comfortable, the driver was professional, and we had no problems getting to all of our stops. Would book them again.",
    date: "2017-06-25",
    city: "Portland",
    state: "OR",
  },
  {
    id: "grace-nguyen",
    author: "Grace Nguyen",
    rating: 5,
    body: "We needed a bus with very little notice and honestly didn’t think we’d find one. Credence Charter Bus came through for us and helped get everything arranged. Really grateful because we were running out of options.",
    date: "2025-01-30",
    city: "Las Vegas",
    state: "NV",
  },
]

export const featuredReviews = [
  customerReviews[9],
  customerReviews[5],
  customerReviews[12],
]

export const averageReviewRating =
  customerReviews.reduce((total, review) => total + review.rating, 0) /
  customerReviews.length
