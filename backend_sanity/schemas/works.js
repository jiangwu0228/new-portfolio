export default {
  name: "works",
  title: "Works",
  type: "document",
  fields: [
    {
      name: "id",
      title: "Id",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "shortDesc",
      title: "Short Description",
      type: "string",
    },
    {
      name: "situation",
      title: "Situation",
      type: "string",
    },
    {
      name: "task",
      title: "Task",
      type: "string",
    },
    {
      name: "actions",
      title: "Actions",
      type: "array",
      of: [
        {
          name: "action",
          title: "Action",
          type: "string",
        },
      ],
    },

    {
      name: "result",
      title: "Result",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
    },
    {
      name: "tag",
      title: "Tag",
      type: "string",
    },
    {
      name: "techs",
      title: "Techs",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
};
