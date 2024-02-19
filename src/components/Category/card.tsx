import Link from 'next/link';

const Card = ({ item }) => {
  return (
    <Link href="/category/[id]" as={`/category/${item.slug}`}>
      <div>
        <div key={item.name} className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img
              src="https://picsum.photos/300/300"
              alt={item.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href={item.href}>
              <span className="absolute inset-0" />
              {item.text}
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
