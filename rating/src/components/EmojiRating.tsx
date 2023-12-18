type Props = {
  rate: number;
}

export const EmojiRating = ({rate}: Props) => {
  if(rate > 5) rate = 5;
  if(rate < 0) rate = 0;

  const emojis = ['', '😭', '😟', '😐', '😁', '😍']
  const rateInt = Math.floor(rate)

  const stars = `${emojis[rateInt]}`.repeat(rateInt) + ''.repeat(5 - rateInt);
  return (
    <div className="flex items-center text-9xl">
      <div className="bg-gray-700 p-2 rounded text-white">{rate.toFixed(1)}</div>
      <div className="ml-3">{stars}</div>
    </div>
  )
}

