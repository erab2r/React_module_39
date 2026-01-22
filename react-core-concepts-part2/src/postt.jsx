export default function Posts({ post }) {
    const { title } = post;

    return (
        <div className="card">
            <h4>Title: {title}</h4>
        </div>
    );
}
