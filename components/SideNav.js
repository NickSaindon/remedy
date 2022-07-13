import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import Link from 'next/link'

const SideNav = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;

  return (
    <div className="card side-nav">
      <div className="card-body">
      {userInfo && userInfo.isAdmin === true &&
        <nav className="nav flex-column">
          <Link href="/admin/dashboard" passHref>
            <a className="nav-link active" aria-current="page">
              Dashboard
            </a>
          </Link>
          <Link href="/admin/orders" passHref>
            <a className="nav-link">
              Orders
            </a>
          </Link>
          <Link href="/admin/products" passHref>
            <a className="nav-link">
              Products
            </a>
          </Link>
          <Link href="/admin/users" passHref>
            <a className="nav-link">
              Users
            </a>
          </Link>
        </nav>
      }
      {userInfo && userInfo.isVendor === true &&
        <nav className="nav flex-column">
          <Link href="/vendor/profile" passHref>
            <a className="nav-link active" aria-current="page">
              Profile
            </a>
          </Link>
          <Link href="/vendor/order-history" passHref>
            <a className="nav-link">
              Order History
            </a>
          </Link>
        </nav>
      }
      </div>
    </div>
  )
}

export default SideNav;