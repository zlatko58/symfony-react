<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Contact;
use Symfony\Component\HttpFoundation\JsonResponse;
use AppBundle\Form\ContactType;


class ContactController extends Controller
{
    /**
     * @Route("/contact/add")
     */
    public function addContactAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $contact = new Contact();
        
        $form = $this->createForm(ContactType::class, $contact);
        $form->submit($data);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($contact);
            $em->flush();
            return new JsonResponse(true);
        }

        return new JsonResponse(false);
    }

    /**
     * @Route("/contact/getAll")
     */
    public function getContactAction()
    {
        $em = $this->getDoctrine()->getManager();
        $query = $em->createQuery(
            'SELECT c
            FROM AppBundle:Contact c'
        );
        $contacts = $query->getArrayResult();

        return new JsonResponse($contacts);
    }
}
