import {
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  AccordionContent,
} from "../ui/Accordion";

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

const Guides = () => {
  return (
    <AccordionRoot type="single">
      <div className="m-5 shadow-[0_2px_10px] shadow-black/5">
        {guides.map(({ title, guide }, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{guide}</AccordionContent>
          </AccordionItem>
        ))}
      </div>
    </AccordionRoot>
  );
};

export default Guides;
