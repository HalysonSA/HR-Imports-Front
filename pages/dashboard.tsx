
import { withAuth } from '../utils/routerProtector'

function AdminPage() {
    return (
        <div>
            <h1>Admin Dashboard</h1>
        </div>
    )
}
export default withAuth(AdminPage)
