/** Cloudinary-hosted product clips (MP4). */
export const INUN_CLOUDINARY_VIDEOS = {
  intro:
    "https://res.cloudinary.com/dawxgroba/video/upload/v1776189800/intro_nqdd0w.mp4",
  assessment:
    "https://res.cloudinary.com/dawxgroba/video/upload/v1776189765/assessment_xsowrz.mp4",
  course:
    "https://res.cloudinary.com/dawxgroba/video/upload/v1776189754/course_jvjgm3.mp4",
  mockInterview:
    "https://res.cloudinary.com/dawxgroba/video/upload/v1776189748/mock-interview_ujrggh.mp4",
  jobPortal:
    "https://res.cloudinary.com/dawxgroba/video/upload/v1776189747/job-portal_l5ezmg.mp4",
} as const;

/** Local PNG posters shown before play (same assets as former static screenshots). */
export const INUN_VIDEO_POSTERS = {
  intro: "/images/courselist.png",
  course: "/images/course.png",
  assessment: "/images/assessmentresult.png",
  mockInterview: "/images/quiz.png",
  jobPortal: "/images/community.png",
} as const;
