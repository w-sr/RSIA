import { Button } from "../components/atoms/Button";
import { Card } from "../components/molecules/Card";
import { TextField } from "../components/molecules/TextField";
import * as S from "../styles/pages/product.styles";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import * as yup from "yup";
import { Indicator } from "../components/atoms/Indicator";
import MainLayout from "../components/organisms/MainLayout/MainLayout";
import { Applicant } from "../models/applications";
import { Product } from "../models/products";
import { State } from "../models/state";
import {
  getApplications,
  updateApplication,
} from "../store/applications/applications.action";
import {
  selectApplicationLoading,
  selectApplications,
} from "../store/applications/applications.selector";
import { selectProducts } from "../store/products/products.selector";
import { useTranslation } from "react-i18next";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [product, setProduct] = useState<Product>();
  const [current, setCurrent] = useState<number>(0);
  const schema = yup
    .object({
      firstName: yup.string().required(t("first-name-required")),
      lastName: yup.string().required(t("last-name-required")),
      email: yup
        .string()
        .required(t("email-required"))
        .email(t("email-invalid")),
      phone: yup
        .string()
        .required(t("phone-required"))
        .matches(phoneRegExp, t("phone-invalid")),
    })
    .required();

  const products = useSelector((state: State) => selectProducts(state));
  const applications = useSelector((state: State) => selectApplications(state));
  const loading = useSelector((state: State) =>
    selectApplicationLoading(state)
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Applicant>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (productId) {
      dispatch(getApplications(Number(productId)));
      setProduct(products.find((pro) => pro.id === Number(productId)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  useEffect(() => {
    if (applications.length > 0) {
      reset(applications[current].applicants[0]);
    }
  }, [applications, current, reset]);

  const onSelectApplication = (id: string) => {
    setCurrent(applications.findIndex((a) => a.id === id));
  };

  const onSubmit = (data: Applicant) => {
    let app = { ...applications[current] };
    app.applicants = [{ ...data }];
    dispatch(updateApplication(app));
  };

  return (
    <>
      <MainLayout>
        <S.Wrap>
          <S.ProductWrap>
            {product && (
              <Card
                type={product.type}
                name={product.name}
                rate={product.bestRate}
                lender={product.lenderName}
                width="240px"
              />
            )}
            {applications.length > 0 && (
              <S.ApplicationWrap>
                <S.ApplicationLabel>
                  {t("select-application")}
                </S.ApplicationLabel>
                <S.ApplicationSelect
                  value={applications[current].id}
                  onChange={(e) => onSelectApplication(e.target.value)}
                >
                  {applications.map((app, index) => (
                    <S.ApplicationOption value={app.id}>
                      {t("application") + ` ${index + 1}`}
                    </S.ApplicationOption>
                  ))}
                </S.ApplicationSelect>
              </S.ApplicationWrap>
            )}
          </S.ProductWrap>
          <S.ApplicantWrap>
            <S.FormTitle>{t("main-applicant")}</S.FormTitle>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.InputWrap>
                <TextField
                  label={t("first-name")}
                  {...register("firstName")}
                  helper={errors.firstName?.message}
                />
              </S.InputWrap>
              <S.InputWrap>
                <TextField
                  label={t("last-name")}
                  {...register("lastName")}
                  helper={errors.lastName?.message}
                />
              </S.InputWrap>
              <S.InputWrap>
                <TextField
                  label={t("email")}
                  {...register("email")}
                  helper={errors.email?.message}
                />
              </S.InputWrap>
              <S.InputWrap>
                <TextField
                  label={t("phone")}
                  {...register("phone")}
                  helper={errors.phone?.message}
                />
              </S.InputWrap>
              <S.ButtonWrap>
                <Button type="submit" width="200px">
                  {t("save")}
                </Button>
              </S.ButtonWrap>
            </S.Form>
          </S.ApplicantWrap>
        </S.Wrap>
      </MainLayout>
      <Indicator loading={loading} />
    </>
  );
};

export default ProductPage;
