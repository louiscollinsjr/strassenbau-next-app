const blocks = [
  { color: 'bg-blue-500/20', cols: 'col-span-1' },
  { color: 'bg-green-500/20', cols: 'col-span-2' },
  { color: 'bg-teal-500/20', cols: 'col-span-1' },
  { color: 'bg-indigo-500/20', cols: 'col-span-2' },
  // { color: 'bg-purple-500/20', cols: 'col-span-1' },
  // { color: 'bg-pink-500/20', cols: 'col-span-1' },
  // { color: 'bg-red-500/20', cols: 'col-span-2' },
  // { color: 'bg-orange-500/20', cols: 'col-span-1' },
  // { color: 'bg-yellow-500/20', cols: 'col-span-1' },
  // { color: 'bg-cyan-500/20', cols: 'col-span-2' },
  // { color: 'bg-emerald-500/20', cols: 'col-span-1' },
  // { color: 'bg-violet-500/20', cols: 'col-span-1' },
];

export default function MasonryGrid() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`${block.color} ${block.cols} h-48 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg`}
        />
      ))}
    </div>
  );
}
