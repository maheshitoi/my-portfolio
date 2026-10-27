import TechIcon from "@/components/ui/TechIcon";

/** Technology pills with their logos. Logos stay grey until hover. */
export default function TechTags({ items }: { items: string[] }) {
  return (
    <ul className="tag-list" aria-label="Technologies">
      {items.map((tech) => (
        <li key={tech} className="tag">
          <TechIcon name={tech} size={13} className="tag-icon" />
          {tech}
        </li>
      ))}
    </ul>
  );
}
