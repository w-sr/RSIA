import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "../components/atoms/Button";
import { Indicator } from "../components/atoms/Indicator";
import { Card } from "../components/molecules/Card";
import MainLayout from "../components/organisms/MainLayout/MainLayout";
import { Product } from "../models/products";
import { State } from "../models/state";
import { createApplication } from "../store/applications/applications.action";
import { getProducts } from "../store/products/products.action";
import {
  selectProducts,
  selectProductsLoading,
} from "../store/products/products.selector";
import * as S from "../styles/pages/dashboard.styles";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const products = useSelector((state: State) => selectProducts(state));
  const loading = useSelector((state: State) => selectProductsLoading(state));

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const selectProduct = (id: number) => {
    dispatch(createApplication({ productId: Number(id) }));
    navigate(`/product/${id}`);
  };

  return (
    <>
      <MainLayout>
        <S.Wrap>
          {products.length > 0
            ? products.map((product: Product) => (
                <S.CardWrap key={product.id}>
                  <Card
                    type={product.type}
                    name={product.name}
                    rate={product.bestRate}
                    lender={product.lenderName}
                    width="240px"
                  >
                    <Button onClick={() => selectProduct(product.id)}>
                      {t("select-product")}
                    </Button>
                  </Card>
                </S.CardWrap>
              ))
            : !loading && <div>No products</div>}
        </S.Wrap>
      </MainLayout>
      <Indicator loading={loading} />
    </>
  );
};

export default Dashboard;
