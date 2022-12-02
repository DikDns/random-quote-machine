export default function ({ loading, error = null, quote }) {
  return (
    <div id={`share-wrapper`}>
      {loading ? (
        `loading`
      ) : error ? (
        "error"
      ) : quote ? (
        <a
          id={`tweet-quote`}
          href={`https://twitter.com/intent/tweet?hashtags=quotes,${quote.tags
            .map((tag) => tag)
            .join(`,`)
            .split("-")
            .join("")}&related=freecodecamp&text="${quote.content}" -${
            quote.author
          }`}
          target={`_blank`}
        >
          Tweet
        </a>
      ) : (
        ``
      )}
    </div>
  );
}
