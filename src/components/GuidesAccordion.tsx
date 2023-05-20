import * as Accordion from "@radix-ui/react-accordion";

const GuidesAccordion = () => {
  const guides = [
    {
      title: "Guide title",
      guide: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Guide title",
      guide: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Guide title",
      guide: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Guide title",
      guide: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <Accordion.Root
      className="w-full h-auto mx-auto max-w-7xl py-10"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <ul className="">
        {guides.map(({ title, guide }, index) => (
          <li key={index}>
            <Accordion.Item className="bg-white" value={`item-${index + 1}`}>
              <Accordion.Trigger className="py-2 px-7 w-full text-left">
                {title}
              </Accordion.Trigger>
              <Accordion.Content>
                <span>{guide}</span>
              </Accordion.Content>
            </Accordion.Item>
          </li>
        ))}
      </ul>
    </Accordion.Root>
  );
};

export default GuidesAccordion;
