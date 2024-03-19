import {FormEvent, useRef} from 'react';
import {Link, Navigate} from 'react-router-dom';
import {Path} from '../../shared/config';
import {VisuallyHidden} from '../../shared/utils';
import {usePostAuthorizationMutation} from "./api";

export const Login = () => {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [postAuthorization] = usePostAuthorizationMutation();

  const isAuth = false; //useAppSelector(chechkAuthStatus);

  if (isAuth) {
    return (
      <Navigate to={Path.Main} />
    );
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!!loginRef.current && !!passwordRef.current) {
      return postAuthorization({
        email: loginRef.current.value,
        password: passwordRef.current.value
      });
    }
  };

  const formFields = [
    {
      id: 1,
      type: 'email',
      placeholder: 'Email',
      ref: loginRef,
    },
    {
      id: 2,
      type: 'password',
      placeholder: 'Password',
      ref: passwordRef,
    },
  ];

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            {formFields.map(({type, placeholder, id, ref}) => (
              <label className="login__input-wrapper form__input-wrapper" key={id}>
                <VisuallyHidden>{placeholder}</VisuallyHidden>
                <input ref={ref} className="login__input form__input" type={type} name={type} placeholder={placeholder} required />
              </label>
            ))}
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={Path.Main}>
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
