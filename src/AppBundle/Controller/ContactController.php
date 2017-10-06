<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Entity\Contact;
use Symfony\Component\Validator\Constraints\Email as EmailConstraint;
use Symfony\Component\HttpFoundation\JsonResponse;


class ContactController extends Controller
{
    /**
     * @Route("/contact/add")
     */
    public function addContactAction(Request $request)
    {
        $emailConstraint = new EmailConstraint();
        $emailConstraint->message = 'Invalid email!';

        $data = $request->getContent();
        $params = json_decode($data, true);

        $name = $params['name'];
        $email = $params['email'];
        $message = $params['message'];

        $errors = $this->get('validator')->validate(
            $email,
            $emailConstraint
        );

        if (is_null($email) || is_null($message) || count(trim($email)) == 0 || count(trim($message)) == 0) {
            return new JsonResponse([
                'text' => 'Empty inputs',
                'error' => 'Empty inputs',
            ]);
        }

        if (count($errors)) {
            return new JsonResponse([
                'text' => $emailConstraint->message,
                'error' => $errors,
            ]);
        }

        $em = $this->getDoctrine()->getManager();

        $contact = new Contact();
        $contact->setName($name);
        $contact->setEmail($email);
        $contact->setMessage($message);
        $em->persist($contact);
        $em->flush();

        return new JsonResponse(true);
    }
}
