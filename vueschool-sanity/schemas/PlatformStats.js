export default {
    name: 'platform-stats',
    type: 'document',
      title: 'Platform Statistics',
    fields: [
      {
        name: 'videoLessonsNumber',
        type: 'number',
        title: 'Video Lessons Number',
        description: 'Write the number of video lessons recorded',
      },
      {
        name: 'coursesNumber',
        type: 'number',
        title: 'Courses Number',
        description: 'Write the number of courses offered',
      },
      {
        name: 'hoursNumber',
        type: 'number',
        title: 'Number of hours',
        description: 'Write the number of courses with 15h of content',
      }
    ]
  }