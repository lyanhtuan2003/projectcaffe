import { Routes, Route } from "react-router-dom"
import HomePage from "./page/HomePage"
import ProductPage from "./page/ProductPage"
import ProductDetailPage from "./page/ProductDetailPage"
import Dashboash from "./page/admin/Dashboash"
import ProductAdmin from "./page/admin/ProductAdmin"
import AddProductAdmin from "./page/admin/AddProductAdmin"
import EditProductAdmin from "./page/admin/EditProductAdmin"
import LayOutClient from "./page/layout/LayOutClient"
import ContactPage from "./page/ContactPage"
import { useState, useEffect } from "react"
import { addproduct, getallproduct, removeproduct } from "./api/Products"
import IntroducePage from "./page/IntroducePage"
import NewsPage from "./page/NewsPage"
import ServicePage from "./page/ServicePage"
import Signin from "./page/login/Signin"
import Signup from "./page/login/Signup"
import LayOutAdmin from "./page/layout/LayOutAdmin"
import { Iacount, Ibank, Icategory, Iproduct } from "./interface/AllApiInterface"
import ProductCart from "./page/ProductCart"
import { getallauth, signup } from "./api/Acount"
import AcountAdmin from "./page/admin/AcountAdmin"
import { addcategory, getallcategory, updatecategory } from "./api/Categorys"
import CategoryAdmin from "./page/admin/CategoryAdmin"
import AddCategoryAdmin from "./page/admin/AddCategoryAdmin"
import ForgotPassword from "./page/login/FogotPassword"
import EditCategory from "./page/admin/EditCategory"
import PayCart from "./page/PayCart"
import { getAllBank } from "./api/Bank"
import BankAdmin from "./page/admin/BankAdmin"
function App() {
  const [products, setProducts] = useState<Iproduct[]>([])
  const [acounts, setAcounts] = useState<Iacount[]>([])
  const [categorys, setCategorys] = useState<Icategory[]>([])
  const [banks, setBanks] = useState<Ibank[]>([])
  useEffect(() => {
    getallproduct().then(({ data }) => setProducts(data.data))
    getallauth().then(({ data }) => setAcounts(data))
    getallcategory().then(({ data }) => setCategorys(data))
    getAllBank().then(({ data }) => setBanks(data))
  }, [])
  const onAddProduct = (data: Iproduct) => {
    addproduct(data).then(() => {
      getallproduct().then(({ data }) => setProducts(data.data))
    })
  }
  const onRemoveProduct = (id: string) => {
    removeproduct(id).then(() => {
      setProducts(products.filter((item) => item._id !== id))
    })
  }

  const onAddCate = (data: Icategory) => {
    addcategory(data).then(() => setCategorys([data, ...categorys]))
  }
  const editCate = (data: Icategory) => {
    updatecategory(data).then(() => setCategorys(categorys.map(item => {
      if (item._id === data._id) {
        return data
      }
      return item
    })))
  }
  const handeladdauth = (user: Iacount) => {
    signup(user).then(() => {
      getallauth().then(({ data }) => setAcounts(data))
    })
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<LayOutClient />}>
          <Route index element={<HomePage />} />

          <Route path="contact" element={<ContactPage />} />
          <Route path="introduce" element={<IntroducePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="fogot" element={<ForgotPassword />} />
          <Route path="signin" element={<Signin acount={acounts} />} />
          <Route path="signup" element={<Signup onadd={handeladdauth} />} />
          <Route path="product">
            <Route index element={<ProductPage product={products} category={categorys} />} />
            <Route path="cart" element={<ProductCart />} />
            <Route path="pay" element={<PayCart />} />
            <Route path=":id" element={<ProductDetailPage />} />

          </Route>
        </Route>
        <Route path="/admin" element={<LayOutAdmin />}>
          <Route index element={<Dashboash />} />
          <Route path="bank">
            <Route index element={<BankAdmin bank={banks} />} />

          </Route>
          <Route path="category">
            <Route index element={<CategoryAdmin category={categorys} />} />
            <Route path="add" element={<AddCategoryAdmin onaddcate={onAddCate} />} />
            <Route path="edit">
              <Route path=":id" element={<EditCategory onedit={editCate} category={categorys} />} />
            </Route>
          </Route>
          <Route path="product">
            <Route index element={<ProductAdmin product={products} ondelete={onRemoveProduct} />} />
            <Route path="add" element={<AddProductAdmin onAdd={onAddProduct} getcate={categorys} />} />
            <Route path=":id">
              <Route path="edit" element={<EditProductAdmin />} />
            </Route>
          </Route>
          <Route path="acount" element={<AcountAdmin acount={acounts} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
