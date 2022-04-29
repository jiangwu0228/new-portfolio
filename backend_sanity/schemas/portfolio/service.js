export default {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          name: "service",
          title: "Service",
          type: "string",
        },
      ],
    },
  ],
};
