import { Link } from "react-router-dom";
import { blogs } from "../../utils/Blogs";

export default function Blog() {
  return (
    <main className="flex flex-col gap-10 px-5 md:px-20 py-10 md:py-20">
      <h3 className="text-2xl md:text-[48px] text-head mx-auto">Our Blog</h3>
      <div className="flex flex-col md:grid grid-cols-3 gap-10 md:gap-20">
        {blogs.map((blog, i) => (
          <Single
            key={i}
            img={blog?.preview}
            title={blog?.title}
            date={blog?.date}
            slug={blog?.slug}
            desc={blog?.desc}
          />
        ))}
      </div>
      <Link
        to="/blogs"
        className="mx-auto text-primary underline uppercase text-lg"
      >
        View All
      </Link>
    </main>
  );
}

const Single = ({ title, desc, img, date, slug }) => {
  return (
    <Link
      to={slug}
      className="flex flex-col border bg-white rounded-xl items-center"
    >
      <img src={img} alt={title} className="w-full" />
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-lg md:text-xl font-[500] text-head">{title}</h3>
        <span className="text-head text-xs uppercase">{date}</span>
        <p>{desc}</p>
      </div>
    </Link>
  );
};
