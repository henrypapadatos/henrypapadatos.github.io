---
layout: post
title: "Quantitative AI risk assessment: a starting point"
date: 2026-05-27
description: >-
  Current AI risk management relies on qualitative approaches, much like nuclear safety before 1975.
  We propose a shift to quantitative risk modeling, following the approach that transformed nuclear
  safety. We propose a methodology and demonstrate it by building nine probabilistic models of
  AI-enabled cyber attacks. This is a first attempt at AI risk quantification. We invite criticism
  and hope this can be a starting point for the kind of iterative improvement that made nuclear
  safety robust.
categories: research
author: Henry Papadatos, Matt Smith, Renn Karageorgieva, Jakub Kryś, Lily Stelling, Malcolm Murray
related_posts: false
---

*Current AI risk management relies on qualitative approaches, much like nuclear safety before 1975.
We propose a shift to quantitative risk modeling, following the approach that transformed nuclear
safety. We propose a methodology and demonstrate it by building nine probabilistic models of
AI-enabled cyber attacks. This is a first attempt at AI risk quantification. We invite criticism and
hope this can be a starting point for the kind of iterative improvement that made nuclear safety
robust.*

## Introduction — why quantitative risk modeling matters

In 1975 the Nuclear Regulatory Commission published
[WASH-1400](https://www.nrc.gov/docs/ML1533/ML15334A199.pdf), the first systematic application of
probabilistic methods to reactor safety. Before it, nuclear safety rested on a conservative,
qualitative argument: the consequences of even the worst accident were effectively zero, because
physical barriers would prevent any radioactive release. In 1966 experts recognised that a core
meltdown in large reactors could breach those barriers. Regulators then had to argue that severe
accidents were possible but sufficiently improbable — which requires specific probability estimates.

The shift was not smooth. As WASH-1400 began, one technical advisor asked whether they dared
undertake such a study before they really knew how. The report drew intense criticism and the NRC
partially rejected its findings in 1979. Even so, imperfect quantification brought three benefits
that compounded over time.

First, it made safety claims auditable. With assumptions written down, reviewers could contest
specific data sources, modeling choices and uncertainty estimates. As
[Keller and Modarres note](https://www.sciencedirect.com/science/article/abs/pii/S0951832004002327),
probabilistic risk assessment forced operators to make explicit what had previously stayed implicit.
That invited specific disagreement and enabled iterative improvement. PRA is now the foundation of
nuclear safety regulation.

Second, it let regulators set explicit safety thresholds — a core damage frequency below
\\(10^{-4}\\) per reactor-year, for example.

Third, even imperfect quantification surfaced new insights. WASH-1400's probability estimates were
contested, but it still found that the major contributors to accident risk were not the catastrophic
failures regulators had focused on, but seemingly minor events. Four years later, the Three Mile
Island accident unfolded through precisely those mechanisms.

AI risk assessment has not made this transition. Current practice centres on capability evaluation:
measure what models can do, set qualitative thresholds, trigger mitigations when a threshold is
crossed. A typical threshold reads: the model can provide meaningful counterfactual assistance to
novice actors, enabling them to create known biological or chemical threats.[^1]

This has two key limitations. Qualitative thresholds are subject to interpretation and revision — a
threshold whose meaning is contested can be reinterpreted rather than acted on. And they measure a
hazard (capability) rather than a harm (outcome), so there is no way to say whether a set of
mitigations reduces harm enough.

## Our methodology

We began by analysing risk modeling practices across high-risk industries and reviewing current AI
risk management approaches ([Touzet et al., 2025](https://arxiv.org/abs/2512.08723)). From this we
proposed a methodology for quantitative AI risk modeling
([Murray et al., 2025](https://arxiv.org/abs/2512.08844)), then demonstrated it by building nine
probabilistic models of AI-aided cyber attacks
([Barrett et al., 2025](https://arxiv.org/abs/2512.08864)).

{% include figure.liquid path="assets/img/blog/qara/image.png" class="img-fluid" caption="Figure 1: Our quantitative risk modeling methodology first decomposes the risk universe into distinct scenarios, then models each using three types of factors: the frequency with which a specific sequence of events is initiated, the probability of the sequence taking place, and the harm that would arise as a result." %}

### Step 1: Defining risk scenarios

We decompose the risk universe along three dimensions: threat actors (using RAND's operational
capacity taxonomy, OC1 to OC5), targets (grouped by similarity of attack surface), and vectors
(attack categories such as phishing and ransomware). Nine scenarios were selected on the basis of
potential harm and expected AI uplift, prioritising the combinations most likely to cause
significant damage.[^2]

{% include figure.liquid path="assets/img/blog/qara/image-1.png" class="img-fluid figure-80" caption="Table 1: Nine cyber risk scenarios selected for detailed modeling. For full scenario descriptions, see Barrett et al. (2025)." %}

### Step 2: Constructing risk models

Risk — expected annual impact — is modeled as the product of the frequency with which attacks are
initiated, the probability that an attack succeeds, and the harm caused by a successful attack. We
decompose frequency into the number of actors and the attempts per actor, which lets us distinguish
whether AI increases attacks by enabling more actors or by enabling existing actors to attempt more.

Success probability is decomposed using the MITRE ATT&CK framework, which distinguishes tactics (the
adversary's objectives) from techniques (the specific methods used). We decompose only where doing
so improves the accuracy of estimation.

{% include figure.liquid path="assets/img/blog/qara/image-2.png" class="img-fluid" caption="Figure 2: An illustrative risk model decomposed into its constituent risk factors." %}

### Step 3: Quantifying baseline risk

Each risk factor is first estimated assuming no AI use. This provides the reference point against
which AI uplift is measured. These estimates go through expert review.

### Step 4: Identifying key risk indicators

Dedicated indicators do not exist for most risk factors, so we map existing indicators onto risk
factors through expert elicitation. Such indicators could include incident reports, API logs or
benchmark performance; for this first attempt we focus on benchmarks. We used three selection
criteria — unsaturated by current models, community-validated, and rankable by difficulty — analysed
over 20 cybersecurity benchmarks against them, and selected two:
[Cybench](https://arxiv.org/abs/2408.08926) (40 capture-the-flag tasks) and
[BountyBench](https://arxiv.org/abs/2505.15216) (real vulnerabilities from bug bounty programs).
Each risk factor requiring quantification is then assigned whichever of the two provides the most
relevant signal.

### Step 5: Estimating AI uplift

We use the [IDEA protocol](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.12857)
(Investigate, Discuss, Estimate, Aggregate) with nine cybersecurity experts. Experts provided
estimates across two rounds, with a discussion facilitated by superforecasters in between to surface
disagreements. Questions took the form: what is the probability that threat actor X could
successfully achieve MITRE ATT&CK technique Y on target Z, given access to an LLM capable of solving
Cybench tasks up to difficulty D? Experts provided probability estimates, bounds and confidence
levels.

{% include figure.liquid path="assets/img/blog/qara/image-3.png" class="img-fluid" caption="Figure 3: An illustrative mapping of benchmark performance to risk factor values, constructed by elicitation with the question “If an LLM could perform all tasks up to task X, what would be the likelihood of event Y, where this LLM is used?” and interpolated." %}

We also tested LLM-based estimation as a way of scaling this process. It aligned reasonably well
with experts on probabilities, but produced more conservative predictions on quantities such as the
number of actors or the potential damage.

### Step 6: Aggregating estimates

Each scenario is represented as a Bayesian network. We fit statistical distributions to the
expert-estimated risk factors and aggregate them by Monte Carlo sampling to produce a distribution
over overall risk.

{% include figure.liquid path="assets/img/blog/qara/image-4.png" class="img-fluid" caption="Figure 4: Fully parametrized OC3 Ransomware risk model, with evidence set on the BountyBench and Cybench indicator nodes. This is a screenshot of the Bayesian network tool we have developed." %}

## Initial insights from quantitative AI risk modeling

The findings below come from the scenario in which an OC3 attacker targets small enterprises.

### 1. Risk increases as AI capabilities increase. So does uncertainty.

{% include figure.liquid path="assets/img/blog/qara/image-5.png" class="img-fluid" caption="Figure 5: Estimated median annual economic damage for the OC3 small enterprise ransomware scenario at three AI capability levels: baseline (no AI), SOTA (late 2025 AI), and saturated (AI saturating Cybench and BountyBench)." %}

Estimated annual economic damage rises as capabilities move from baseline (no AI) through SOTA (late
2025) to saturated (models maxing out both benchmarks). Uncertainty increases substantially at the
higher capability levels: experts have direct evidence about current systems, but must forecast the
effects of more powerful future ones.

### 2. Different benchmarks capture risk differently.

{% include figure.liquid path="assets/img/blog/qara/image-6.png" class="img-fluid" caption="Figure 6: Estimated median annual economic damage as a function of Cybench and BountyBench scores. Tasks are ordered by increasing difficulty." %}

Risk is significantly more sensitive to BountyBench scores than to Cybench scores. This likely
reflects two factors: BountyBench tasks are generally more challenging, and their greater realism
gives experts more signal about whether an AI system could support an actual attack. The broader
point, which surfaced during the discussion phase of the IDEA protocol, is that risk models can
reveal how informative different benchmarks are about real-world risk — which can guide the
development of future benchmarks toward the most decision-relevant information.

### 3. Attack bottlenecks change as capabilities change.

To identify which steps in the attack chain are the biggest bottlenecks for attackers — where they
fail most often — we use a normalized surprisal metric. For each MITRE ATT&CK tactic we compute:

$$
S_t = \frac{\log(1/p_t)}{\sum_{t'} \log(1/p_{t'})}
$$

where \\(p_t\\) is the probability of success for tactic \\(t\\), conditioned on success in all
previous tactics. This measures how much each tactic contributes to the overall "surprise" of a
successful attack. Higher values indicate that a tactic is a more likely point of failure.

{% include figure.liquid path="assets/img/blog/qara/image-8.png" class="img-fluid" caption="Figure 7: Normalized surprisal by MITRE ATT&CK tactic at three AI capability levels: baseline (no AI), SOTA (late 2025 AI), and saturated (AI saturating Cybench and BountyBench). Higher values indicate bigger bottlenecks for attackers." %}

Some tactics remain consistent bottlenecks across all capability levels; others shift. Without AI,
privilege escalation is more of a bottleneck than lateral movement. With SOTA AI this flips.
Similarly, initial access is the second-largest bottleneck at both baseline and SOTA levels, but
drops in relative importance at saturated capabilities, where privilege escalation and lateral
movement become comparatively harder.

This is directly relevant to decision-making. Defenders may invest more in the stages that are
bottlenecks, or focus on the stages where they are most vulnerable, depending on their particular
posture. By anticipating how threats evolve with AI capabilities, risk models help prioritise
mitigation investment in a forward-looking way.

### 4. Factors driving risk from current AI systems are different from factors that may drive risk in the future.

To identify which risk factors contribute most to AI-driven uplift, we conduct a Shapley attribution
analysis on the overall probability of a successful attack. Each value represents the normalized
logarithmic gain between baseline and AI-uplifted attackers for a given factor; higher values mean a
factor accounts for a larger share of the total uplift.

{% include figure.liquid path="assets/img/blog/qara/image-9.png" class="img-fluid" caption="Figure 8: Shapley attribution of AI-driven uplift across risk factors." %}

At current (SOTA) capability levels the increase in attack success probability is largely driven by
privilege escalation, while lateral movement contributes little. At saturated capabilities the
contributions are more evenly distributed, including lateral movement. This suggests that as AI
capabilities improve they may cross critical thresholds for steps that are not significantly
uplifted today.

## Open problems

Below are the limitations of our approach and where further work is most needed. We see these as
open problems for the field, and hope others will help address them.

**Benchmarks don't match risk factors.** Current benchmarks don't always map cleanly onto specific
risk factors, which makes elicitation harder: experts must extrapolate from imperfect proxies rather
than reason from direct evidence. Benchmarks tailored to risk factors would help, but for some
factors — economic harm, for instance — this may be inherently difficult.

**Expert elicitation is not an exact science.** The methodology relies heavily on expert judgment,
and the quantities we ask about — the probability of success for a specific attack step at a given
AI capability level — can be unintuitive and hard for humans to assess. More iteration on the
specifics of the protocol (exact question wording, calibration training) would be valuable.

**Real-world validation.** Risk models are only useful if they predict reality, and we have not yet
validated ours against real-world incident data. This is essential both for refining estimates and
for building trust in the methodology. We plan to work on it, and would welcome collaboration —
particularly from those with access to cyber incident data.

**Statistical assumptions.** When aggregating estimates we make simplifying assumptions, most
notably that risk factors are independent. Two avenues for improvement: designing risk models better
around these assumptions (which we have begun), and estimating dependencies between factors
directly.

**Depth vs. breadth.** There is a tradeoff in how specific to make each scenario. Broader scenarios
("OC3 attackers targeting enterprises") are more representative of total risk but harder for experts
to estimate. Narrower ones (a specific enterprise with a known security posture) are easier to
estimate and less informative about total risk.

**Static defences.** Our current models assume defences remain constant as AI capabilities improve.
A more complete picture would also estimate how AI enhances defence. That adds complexity,
particularly because attackers and defenders may adopt AI at different rates — small critical
infrastructure operators are likely to be slower than attackers in using the latest capabilities.
This introduces a temporal dimension our current models don't capture.

## What's next for SaferAI

In the spirit of WASH-1400, we are publishing all our work openly. Our three companion papers are
available here [[1](https://arxiv.org/pdf/2512.08723), [2](https://arxiv.org/pdf/2512.08844),
[3](https://arxiv.org/pdf/2512.08864)]. We will release all nine fully estimated risk models publicly
in the coming months, and the code for running the LLM estimator pipeline is available
[here](https://github.com/safer-ai/LLM_elicitation).

We are now applying this methodology to CBRN risks, and later plan to apply it to loss of control
risks. We will continue refining both the general methodology and the domain-specific models as we
learn from feedback and new data.

We have begun partnering with AI Safety Institutes and the European Commission to support
organisations developing their own risk modeling capabilities. If you are working on quantitative AI
risk assessment and would find collaboration useful, don't hesitate to reach out.

Our estimates carry significant uncertainty and should not be used directly for decision-making
without further validation. But in the spirit of WASH-1400, we invite criticism. If you disagree
with our scenarios, our risk factor estimates, or our modeling choices, we want to hear it. Nuclear
safety today is the product of decades of collective effort, researchers iterating on imperfect
first attempts until the methodology became robust. AI safety will require the same. We offer this
as a starting point.

[^1]: We are not singling out any one company; most published frameworks are similar. We have analysed the 12 published frameworks in detail [here](https://ratings.safer-ai.org/comparison/).

[^2]: We include only scenarios where we expect AI to provide non-negligible uplift, in terms of the likelihood of attack success, the volume of attacks, or the ability to target more sophisticated defenders than would be possible without AI.
