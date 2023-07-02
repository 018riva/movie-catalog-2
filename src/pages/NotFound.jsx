import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
      <div>
        This page does not exist. Go <Link to="/">home</Link>
      </div>
    )
  }
  
  export {NotFoundPage}